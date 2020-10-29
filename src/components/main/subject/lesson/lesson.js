import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '../../../../layouts/Button'
import { isEmpty } from 'lodash';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Chapter from '../../../../layouts/chapter'
import PodcastAudio from '../podcast/podcastAudio';

const useStyles = makeStyles((theme) => ({
  main: {
    marginLeft: '160px', /* Same as the width of the sidenav */
    fontSize: '28px', /* Increased text to enable scrolling */
    padding: '0px 10px',
  }

}));


const Subjects = [
  { id: 0, subject:"Maths", chapter: ["chap1", "chap2","chap3"], descripe:  ["chap1", "chap2","chap3"], },
  { id: 1, subject:"Maths", chapter: ["chap1", "chap2","chap3"], descripe:  ["descripe1", "descripe2","descripe3"],},
  { id: 2,  subject:"Science",chapter: ["chap1", "chap2","chap3"], descripe:["descripe1", "descripe2","descripe3"]},
  { id: 3, subject:"History", chapter:["chap1", "chap2","chap3"], descripe:["descripe1", "descripe2","descripe3"] },
  { id: 4, subject:"Commerce", chapter:["chap1", "chap2","chap3"], descripe: ["descripe1", "descripe2","descripe3"] },
  { id: 5, subject:"It", chapter:["chap1", "chap2","chap3"], descripe: ["descripe1", "descripe2","descripe3"] },
  { id: 6, subject:"Tamil", chapter:["chap1", "chap2","chap3"], descripe: ["descripe1", "descripe2","descripe3"] }
];

const SubjectTitle = [
  {
    title: 'Maths',
    href: '1',
  },
  {
    title: 'Science',
    href: '2',
  },
  {
    title: 'History',
    href: '3',
  },

  {
    title: 'Commerce',
    href: '4',
  },
  {
    title: 'IT',
    href: '5',
  },
  {
    title: 'Tamil',
    href: '6',
  },
];
function Dashboard() {
  let location = useLocation();
  let background = location.state && location.state.background;
  const classes = useStyles();

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/subject" children={<SubjectHome />} />
        <Route exact path="/subject/:id" children={<ChapterCard />} />
        <Route path="/subject/:id/:id" children={<ChapterAudio />} />
        {/* <Route path="/subject/:id/:id/:id" children={<ChapterCard />} /> */}
      </Switch>
    </div>
  )
}

function ChapterAudio() {
  let location = useLocation();
  return (
    <div>
      <PodcastAudio chapter='dsfed' />
    </div>
  );
}

function SubjectHome() {
  let location = useLocation();
  return (
    <div>
      {SubjectTitle.map(i => (
        <Link
          key={i.id}
          to={{
            pathname: `/subject/${i.href}`
          }}

        >
          <Button data={i} />
        </Link>
      ))}
    </div>
  );
}

function ChapterCard() {
  let { id } = useParams();
  let { url } = useRouteMatch();

  let subject = Subjects[parseInt(id, 10)] 

  { console.log(id) }

  if (!subject) return <div>Image not found</div>;

  return (
    <div>
      <h1>{subject.subject}</h1>
      <Chapter chapter={subject.chapter[0]}  descripe={subject.descripe[0]} href={`${url}/${id}`} />
    <div style={{backgroundColor:'beige'}} >
    <Chapter chapter={subject.chapter[1]}  descripe={subject.descripe[1]} />
    </div>
      <Chapter chapter={subject.chapter[2]}  descripe={subject.descripe[2]} />
    </div>
  );
}

function Image({ color }) {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: color
      }}
    />
  );
}

function Modal(props) {
  let history = useHistory();
  let { id } = useParams();
  let image = Subjects[parseInt(id, 10)];
  if (!image) return null;
  let back = e => {
    e.stopPropagation();
    history.goBack();
  };
  { console.log('id') }
  { console.log(image) }

  return (

    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>{image.title}qwedqw</h1>
        <Image color={image.color} />
        <button type="button" onClick={back}>
          Close
          </button>
      </div>
    </div>
  );
}

export default Dashboard