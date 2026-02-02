export const profileData = {
  aboutText: `I am a Software Engineer, based in Bay Area.\nI most recently worked on turnkey software to support virtual care experiences for health systems at 98point6 Technologies Inc. I started my journey at 98point6 as an intern, I quickly advanced to Software Development Engineer and then to SDE II. My journey involved leading cross-functional teams, improving user experiences, and ensuring web accessibility compliance. I contributed to a 50% reduction in physician visit times and developed automated systems for efficient patient care. I developed innovative solutions that enhance healthcare delivery. I worked on building FHIR-compliant databases, optimizing web applications, and integrating advanced algorithms to streamline healthcare processes. \nPreviously, at Addgene, where I developed new website features, created DjangoCMS plugins for easier content management, and automated tasks using Celery. I played a key role in upgrading legacy systems, refactoring code, and implementing automated testing to enhance the platform's functionality and reliability. \nHolding an MS in Computer Science from Northeastern University, I bring a deep technical expertise and a passion for driving impactful change through technology. I am adept at collaborating with diverse teams, working under tight deadlines, and managing multiple projects simultaneously. Passionate about leveraging technology to improve lives, I’m eager to connect with like-minded professionals.`,
  experience: [
    {
      duration: 'July 2023 - Sept 2023',
      role: 'Software Development Engineer II',
      company: '98point6 Technologies Inc.',
      companyUrl: 'https://www.98point6.com/',
      description: [
        'Led cross functional collaboration of teams to design and develop a user profile management tool for healthcare professionals and devised comprehensive testing plans.',
        'Created a FHIR compliant user database schema and used GraphQL for querying the database.',
      ],
    },
    {
      duration: 'Jan 2019 - July 2023',
      role: 'Software Development Engineer',
      company: '98point6 Technologies Inc.',
      companyUrl: 'https://www.98point6.com/',
      description: [
        'Set up a web app for behavioral health patient cases, with CI/CD and deployed it using AWS CDK.',
        'Achieved web accessibility of patient web app through adherence to WCAG 2.1 guidelines and creating a responsive design for desktop, tablet, and mobile devices.',
        'Built UI for integrating prescription history of patients from backend using REST APIs.',
        'Enhanced the physician-facing web application, introducing algorithm-based predictions for diagnoses, medications, and lab orders, leading to visit time reduction by 50% (~3 minutes).',
        'Implemented automated referral system to ensure timely delivery of contractual customer commitments.',
        'Improved user experience with features like automated notes and delivery of diagnoses, medications, and treatment plans, as well as follow-up visit capabilities.',
        'Analyzed and re-assessed the web KPIs, worked on operational duties, and authored technical documents.',
        'Performed platform maintenance by adding ESLint rules, safely updating packages and modules, migrated production builds to a more secure S3 bucket.',
        'Conducted code and design reviews, technical and behavioral interviews, and participated in mentoring.',
      ],
    },
    {
      duration: 'Sept 2019 - Dec 2019',
      role: 'Undergraduate Teaching Assistant',
      company: 'Northeastern University, Khoury College of Computer Sciences',
      companyUrl: 'https://www.khoury.northeastern.edu/',
      description: [
        'Conducted academic tutoring and grading for Computer Science and its Application (CS1100).',
      ],
    },
    {
      duration: 'May 2019 - Aug 2019',
      role: 'Software Engineer Intern',
      company: '98point6 Technologies Inc.',
      companyUrl: 'https://www.98point6.com/',
      description: [
        'Created a scalable Chrome extension to extract Clinician data from Modio and automatically fill out state licensing application, using JavaScript, Webpack, and Babel.',
        'Updated the designs for the video calling feature to be more intuitive and follow the industry standards using React with CSS.',
        'Improved user data privacy and security by implementing a caching system to replace hard-disk storage.',
        'Enhanced the web application by adding new functionalities to improve user experience.',
      ],
    },
    {
      duration: 'May 2018 - Dec 2018',
      role: 'Software Development Engineer Co-op',
      company: 'Addgene',
      companyUrl: 'https://www.addgene.org/',
      description: [
        'Built new features for the website and created DjangoCMS Plugins for easier UI and content management.',
        'Documented Celery, automated tasks using Celery Beat and converted Cron jobs to Celery Beat tasks.',
        'Revamped deposit status page of plasmids and created tokenized URL to restrict access to the page.',
        'Refactored legacy code by migrating a Django model into a different app without table and data loss.',
        'Ported Python2 code to Python3 to accomplish company goal to upgrade Django 1.11 to Django 2.1 with help of python-futurize library in Agile development cycles.',
        'Eliminated need of manual testing by developing unit tests and end-to-end automation test scripts using Selenium.',
      ],
    },
  ],
}
