import React from "react";
import Layout from "../components/layout/layout";
import SpecializationCarousel from "../components/pages/resume/carousel/carousel";
import ResumeImg from "../components/pages/resume/resume_img/resumeImg";
import style from "../components/pages/resume/resume.module.scss";
import dhruvajResume from "../images/static_files/Dhruvaj_resume.pdf";

const EDUCATION = [
  {
    title: "MCA",
    institute: "MITSOM",
    year: "JAN '17 - '20",
  },
  {
    title: "BCA",
    institute: "SKNCC",
    year: "JAN '14 - '17",
  },
];

const EXPERIENCE = [
  {
    position: "Trainee Associate",
    company: "Western Union",
    year: "Jan ‘20 - ‘Current",
  },
  {
    position: "Freelance",
    company: "Self-Employeed",
    year: "Nov ‘19 - ‘Jan ‘20",
  },
  {
    position: "Fullstack Developer",
    company: "Stackwise",
    year: "Jan ‘19 - Nov ‘20",
  },
  {
    position: "Intern",
    company: "Fizzible & Phynart",
    year: "Dec ‘14 - Mar '15",
  }
];

const LANGUAGES = ["ENGLISH", "HINDI", "MARATHI"];

export default function resume() {
  return (
    <Layout>
      <div className={style.resumeContainer}>
        <div className={style.resumeSectionOne}>
          <div className={style.imgContainer}>
            <div className={style.img}>
              <ResumeImg></ResumeImg>
            </div>
          </div>
          <div style={{ flex: 8, display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <h1>Specialization</h1>
            </div>
            <div style={{ flex: 9, display: "flex" }}>
              <SpecializationCarousel></SpecializationCarousel>
            </div>
          </div>
        </div>
        <div className={style.resumeSectionTwo}>
          <button> <a href={dhruvajResume} download="Dhruvaj Resume">Download Resume</a></button>
        </div>
        <div className={style.resumeSectionThree}>
          <div className={style.infoSection}>
            <h3>Education</h3>
            <div className={style.detailsContainer}>
              {EDUCATION.map((obj, index) => {
                return (
                  <div  className={style.details}  key={index}>
                    <h5>{obj.title}</h5>
                    <p>
                      {obj.institute} - {obj.year}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.infoSection}>
            <h3>Experience</h3>
            <div className={style.detailsContainer}>
              {EXPERIENCE.map((obj, index) => {
                return (
                  <div  className={style.details}  key={index}>
                    <h5>{obj.position}</h5>
                    <p>
                      {obj.company} - {obj.year}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={style.infoSection}>
            <h3>Languages</h3>
            <div className={style.detailsContainer}>
              {LANGUAGES.map((str, index) => {
                return (
                  <div className={style.details} key={index}>
                    <h5>{str}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
