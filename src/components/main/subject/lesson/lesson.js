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
import student from "../../../../assects/image/stu01.jpeg";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  containerButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    width:'100%',
    margin:'0 auto',
    maxWidth:'500px',
    justifyContent: 'center',
    '& > :nth-child(n+1)': {
      margin: '12px',
    },
  },
  containerSubject:{
    marginTop:'80px',
    width:'100%',
    margin:'0 auto',
    maxWidth:'500px',
    justifyContent: 'center'
  },
  avatarFrame: {
    height: '64px',
    width: '64px',
  },
  avatar: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    border: '3px solid white',
    boxShadow: '0 12px 18px rgba(47, 47,51, 0.16)'
  },
  nameset:{
    display:'flex',
  },
  name:{
    paddingLeft:"10px"
  },
  select:{
    paddingLeft:'20px'
  }

}));


const Subjects = [
  { id: 0, subject:"Maths", chapter: ["chap1", "chap2","chap3"], descripe:  ["chap1", "chap2","chap3"], },
  { id: 1, subject:"Maths", chapter: ["chap1", "chap2","chap3"],
    descripe:  ["Photosynthesis is a process used by plants and other organisms to convert light energy into chemical energy that can later be released to fuel the organisms' activities.", "Chemistry is the scientific discipline involved with elements and compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.","Mammal, a vertebrate animal whose young are nourished with milk from special mammary glands of the mother."],
    podcast:["3","4","5"],
    gem:['4','2','1'],
    page:['67','76','44']
  },

  { id: 2,  subject:"Science",chapter: ["chap1", "chap2","chap3"], descripe:["descripe1", "descripe2","descripe3"]  ,podcast:["3","4","5"],
    gem:['4','2','1'],
    page:['67','76','44']},
  { id: 3, subject:"History", chapter:["chap1", "chap2","chap3"], descripe:["descripe1", "descripe2","descripe3"], podcast:["3","4","5"],
    gem:['4','2','1'],
    page:['67','76','44'] },
  { id: 4, subject:"Commerce", chapter:["chap1", "chap2","chap3"], descripe: ["descripe1", "descripe2","descripe3"] , podcast:["3","4","5"],
    gem:['4','2','1'],
    page:['67','76','44']},
  { id: 5, subject:"It", chapter:["chap1", "chap2","chap3"], descripe: ["descripe1", "descripe2","descripe3"] , podcast:["3","4","5"],
    gem:['4','2','1'],
    page:['67','76','44']},
  { id: 6, subject:"Tamil", chapter:["chap1", "chap2","chap3"], descripe: ["descripe1", "descripe2","descripe3"] , podcast:["3","4","5"],
    gem:['4','2','1'],
    page:['67','76','44']}
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
  const classes = useStyles();

  return (
    <div  className={classes.containerSubject}>
      <div className={classes.nameset} >
        <div className={classes.avatarFrame}>
        <img src={student} className={classes.avatar}/>
        </div>
        <Typography variant="h3" className={classes.name} >Hi! Natasha</Typography>
      </div>
      <div>
        <Typography variant="h5" className={classes.select}> Select Your Subject</Typography>
      </div>
     <div className={classes.containerButtons}>
       {SubjectTitle.map(i => (
           <Link
               key={i.id}
               to={{
                 pathname: `/subject/${i.href}`
               }}
               style={{ textDecoration: 'none' }}
           >
             <Button data={i} />
           </Link>
       ))}
     </div>
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
      <Chapter chapter={subject.chapter[0]}  descripe={subject.descripe[0]} href={`${url}/${id}`}
      podcast={subject.podcast[0]}
      gem={subject.gem[0]}
      page={subject.page[0]}
      />
    <div style={{backgroundColor:'beige'}} >
    <Chapter chapter={subject.chapter[1]}  descripe={subject.descripe[1]}  href={`${url}/${id}`}
             podcast={subject.podcast[1]}
             gem={subject.gem[1]}
             page={subject.page[1]}/>
    </div>
      <Chapter chapter={subject.chapter[2]}  descripe={subject.descripe[2]}  href={`${url}/${id}`}
               podcast={subject.podcast[2]}
               gem={subject.gem[2]}
               page={subject.page[2]}/>
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