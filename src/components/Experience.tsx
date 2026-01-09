import styled from 'styled-components'

const Styled = {
  Root: styled.div`
    text-align: center;
    margin-left: 17%;
    width: 65%;
    margin-bottom: 40px;
  `,
  Title: styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
  `,
  Content: styled.div`
    font-size: 16px;
    line-height: 1.5;
  `,
  Position: styled.div`
    margin: 5px 20px;
    padding: 5px 20px;
  `,
  Company: styled.a`
    font-style: italic;
    color: grey;
  `,
  Role: styled.div``,
  Duration: styled.td`
    font-weight: normal;
    min-width: 200px;
    vertical-align: top;
  `,
  Description: styled.ul`
    text-align: left;
    margin-left: -20px;
  `,
  RoleAndDescription: styled.td`
    text-align: left;
  `,
}

const Experience = () => {
  return (
    <Styled.Root>
      <Styled.Title>Experience</Styled.Title>
      <Styled.Content>
        <table>
          <Styled.Position>
            <Styled.Duration>July 2023 - Sept 2023</Styled.Duration>
            <Styled.RoleAndDescription>
              <Styled.Role>
                {' '}
                Software Development Engineer II,{' '}
                <Styled.Company target="_blank" href="https://www.98point6.com/">
                  98point6 Technologies Inc.
                </Styled.Company>
              </Styled.Role>
              <Styled.Description>
                <li>
                  Led cross functional collaboration of teams to design and develop a user profile
                  management tool for healthcare professionals and devised comprehensive testing
                  plans.
                </li>
                <li>
                  Created a FHIR compliant user database schema and used GraphQL for querying the
                  database.
                </li>
                <li>
                  Contributed to a 50% reduction in physician visit times through innovative
                  solutions.
                </li>
              </Styled.Description>
            </Styled.RoleAndDescription>
          </Styled.Position>
          <Styled.Position>
            <Styled.Duration>Jan 2019 - July 2023</Styled.Duration>
            <Styled.RoleAndDescription>
              <Styled.Role>
                {' '}
                Software Development Engineer,{' '}
                <Styled.Company target="_blank" href="https://www.98point6.com/">
                  98point6 Technologies Inc.
                </Styled.Company>{' '}
              </Styled.Role>
              <Styled.Description>
                <li>
                  Set up a web app for behavioral health patient cases, with CI/CD and deployed it
                  using AWS CDK.{' '}
                </li>
                <li>
                  Achieved web accessibility of patient web app through adherence to WCAG 2.1
                  guidelines and creating a responsive design for desktop, tablet, and mobile
                  devices.
                </li>
                <li>
                  Built UI for integrating prescription history of patients from backend using REST
                  APIs.
                </li>
                <li>
                  Enhanced the physician-facing web application, introducing algorithm-based
                  predictions for diagnoses, medications, and lab orders, leading to visit time
                  reduction by 50% (~3 minutes).
                </li>
                <li>
                  Implemented automated referral system to ensure timely delivery of contractual
                  customer commitments.
                </li>
                <li>
                  Improved user experience with features like automated notes and delivery of
                  diagnoses, medications, and treatment plans, as well as follow-up visit
                  capabilities.
                </li>
                <li>
                  Analyzed and re-assessed the web KPIs, worked on operational duties, and authored
                  technical documents.{' '}
                </li>
                <li>
                  Performed platform maintenance by adding ESLint rules, safely updating packages
                  and modules, migrated production builds to a more secure S3 bucket.
                </li>
                <li>
                  Conducted code and design reviews, technical and behavioral interviews, and
                  participated in mentoring.
                </li>
              </Styled.Description>
            </Styled.RoleAndDescription>
          </Styled.Position>
          <Styled.Position>
            <Styled.Duration>Sept 2019 - Dec 2019</Styled.Duration>
            <Styled.RoleAndDescription>
              <Styled.Role>
                {' '}
                Undergraduate Teaching Assistant,{' '}
                <Styled.Company target="_blank" href="https://www.khoury.northeastern.edu/">
                  Northeastern University, Khoury College of Computer Sciences
                </Styled.Company>{' '}
              </Styled.Role>
              <Styled.Description>
                <li>
                  Conducted academic tutoring and grading for Computer Science and its Application
                  (CS1100).
                </li>
              </Styled.Description>
            </Styled.RoleAndDescription>
          </Styled.Position>
          <Styled.Position>
            <Styled.Duration>May 2019 - Aug 2019</Styled.Duration>
            <Styled.RoleAndDescription>
              <Styled.Role>
                {' '}
                Software Engineer Intern,{' '}
                <Styled.Company target="_blank" href="https://www.98point6.com/">
                  98point6 Technologies Inc.
                </Styled.Company>{' '}
              </Styled.Role>
              <Styled.Description>
                <li>
                  Created a scalable Chrome extension to extract Clinician data from Modio and
                  automatically fill out state licensing application, using JavaScript, Webpack, and
                  Babel.
                </li>
                <li>
                  Updated the designs for the video calling feature to be more intuitive and follow
                  the industry standards using React with CSS.
                </li>
                <li>
                  Improved user data privacy and security by implementing a caching system to
                  replace hard-disk storage.
                </li>
                <li>
                  Enhanced the web application by adding new functionalities to improve user
                  experience.
                </li>
              </Styled.Description>
            </Styled.RoleAndDescription>
          </Styled.Position>
          <Styled.Position>
            <Styled.Duration>May 2018 - Dec 2018</Styled.Duration>
            <Styled.RoleAndDescription>
              <Styled.Role>
                {' '}
                Software Development Engineer Co-op,{' '}
                <Styled.Company target="_blank" href="https://www.addgene.org/">
                  Addgene
                </Styled.Company>{' '}
              </Styled.Role>
              <Styled.Description>
                <li>
                  Built new features for the website and created DjangoCMS Plugins for easier UI and
                  content management.
                </li>
                <li>
                  Documented Celery, automated tasks using Celery Beat and converted Cron jobs to
                  Celery Beat tasks.
                </li>
                <li>
                  Revamped deposit status page of plasmids and created tokenized URL to restrict
                  access to the page.
                </li>
                <li>
                  Refactored legacy code by migrating a Django model into a different app without
                  table and data loss.
                </li>
                <li>
                  Ported Python2 code to Python3 to accomplish company goal to upgrade Django 1.11
                  to Django 2.1 with help of python-futurize library in Agile development cycles.
                </li>
                <li>
                  Eliminated need of manual testing by developing unit tests and end-to-end
                  automation test scripts using Selenium.
                </li>
              </Styled.Description>
            </Styled.RoleAndDescription>
          </Styled.Position>
        </table>
      </Styled.Content>
    </Styled.Root>
  )
}

export default Experience
