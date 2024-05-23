import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Roles.css';

const companiesData = [
  {
    id: 1,
    name: 'Company A',
    jobRoles: ['Frontend Developer','Backend Developer','Full Stack Developer'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'HR Interview',
      'Offer'
    ],
  },
  {
    id: 2,
    name: 'Company B',
    jobRoles: ['iOS Developer', 'Machine Learning Engineer', 'UI UX Designer'],
    recruitingProcess: [
      'Online Application',
      'Phone Interview',
      'On-site Interview',
      'Team Interview',
      'Offer'
    ],
  },
  {
    id: 3,
    name: 'Company C',
    jobRoles: ['Backend Developer', 'Front-end Developer', 'System Architect'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'Bar Raiser Interview',
      'Offer'
    ],
  },
  {
    id: 4,
    name: 'Company D',
    jobRoles: ['Cloud Engineer', 'Security Specialist', 'Product Manager'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'HR Interview',
      'Offer'
    ],
  },
  {
    id: 5,
    name: 'Company E',
    jobRoles: ['Software Engineer', 'Data Scientist', 'UI UX Designer'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'HR Interview',
      'Offer'
    ],
  },
  {
    id: 6,
    name: 'Company F',
    jobRoles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'HR Interview',
      'Offer'
    ],
  },
  {
    id: 7,
    name: 'Company G',
    jobRoles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
    recruitingProcess: [
      'Online Application',
      'Technical Screening',
      'On-site Interview',
      'HR Interview',
      'Offer'
    ],
  },
  {
    id: 8,
    name: 'Company H',
    jobRoles: ['Software Engineer','Data Scientist','Systems Analyst'],
    recruitingProcess: ['Online Application','Technical Screening','On-site Interview','HR Interview','Offer'],
  },
  {
    id: 9,
    name: 'Company I',
    jobRoles: ['UI UX Designer','Data Scientist','Systems Analyst'],
    recruitingProcess: ['Online Application','Technical Screening','On-site Interview','HR Interview','Offer'],
  },
  {
    id: 10,
    name: 'Company J',
    jobRoles: ['Frontend Developer','Backend Developer','Full Stack Developer'],
    recruitingProcess: ['Online Application','Technical Screening','On-site Interview','HR Interview','Offer'],
  },
  {
    id: 11,
    name: 'Company K',
    jobRoles: ['Network Engineer', 'Database Administrator','CyberSecurity Specialist'],
    recruitingProcess: ['Online Application','Technical Screening','On-site Interview','HR Interview','Offer'],
  },
  {
    id: 12,
    name: 'Company L',
    jobRoles: ['Frontend Developer','Backend Developer','Full Stack Developer'],
    recruitingProcess: ['Online Application','Technical Screening','On-site Interview','HR Interview','Offer'],
  },
  {
    id: 13,
    name: 'Company M',
    jobRoles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
    recruitingProcess: ['Online Application','Technical Screening','On-site Interview','HR Interview','Offer'],
  },
  {
    id: 14,
    name: 'Company N',
    jobRoles: ['Cloud Engineer', 'Cyber Security Specialist', 'Product Manager'],
    recruitingProcess: ['Online Application','Technical Screening','On-site Interview','HR Interview','Offer'],
  },
  {
    id: 15,
    name: 'Company O',
    jobRoles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
    recruitingProcess: ['Online Application','Technical Screening','On-site Interview','HR Interview','Offer'],
  },
  {
    id: 16,
    name: 'Company P',
    jobRoles: ['Frontend Developer','Backend Developer','Full Stack Developer'],
    recruitingProcess: ['Online Application','Technical Screening','On-site Interview','HR Interview','Offer'],
  },
];

const RolesPage = () => {
  const { companyId } = useParams();
  const company = companiesData.find(company => company.id === parseInt(companyId));

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <div className="role-container">
      <h2>Available Job Roles and Recruiting Process for {company.name}</h2>
      <div className="roles">
                <h3>{company.name}</h3>
                <div className="job-role-buttons">
          {company.jobRoles.map((role, index) => (
            <React.Fragment key={index}>
              <Link to={`/${role.replace(/\s+/g,'').toLowerCase()}`} className="job-role-link">
                <button className="job-role-button">{role}</button>
              </Link>
              <br />
            </React.Fragment>
          ))}
        </div>


        <div className="recruit">
          <h4>Recruiting Process:</h4>
          <div className="recruit-steps">
            {company.recruitingProcess.map((step, index) => (
              <div key={index} className="recruit-step">
                {index + 1}. {step}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default RolesPage;
