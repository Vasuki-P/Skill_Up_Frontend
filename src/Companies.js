import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Learning.css';

const Companies = () => {
  // Sample data for 16 companies
  const companiesData = [
    { id: 1, name: 'Company A', industry: 'Technology', employees: '150,000', headquarters: 'Mountain View, California', founded: '1998' },
    { id: 2, name: 'Company B', industry: 'Technology', employees: '154,000', headquarters: 'Cupertino, California', founded: '1976' },
    { id: 3, name: 'Company C', industry: 'Technology/Retail', employees: '1,298,000', headquarters: 'Seattle, Washington', founded: '1994' },
    { id: 4, name: 'Company D', industry: 'Technology', employees: '181,000', headquarters: 'Redmond, Washington', founded: '1975' },
    { id: 5, name: 'Company E', industry: 'Technology', employees: '71,100', headquarters: 'Menlo Park, California', founded: '2004' },
    { id: 6, name: 'Company F', industry: 'Automotive/Energy', employees: '110,000', headquarters: 'Palo Alto, California', founded: '2003' },
    { id: 7, name: 'Company G', industry: 'Technology', employees: '156,500', headquarters: 'Mountain View, California', founded: '2015' },
    { id: 8, name: 'Company H', industry: 'Automotive', employees: '366,283', headquarters: 'Toyota City, Aichi Prefecture, Japan', founded: '1937' },
    { id: 9, name: 'Company I', industry: 'Technology', employees: '287,439', headquarters: 'Suwon, South Korea', founded: '1969' },
    { id: 10, name: 'Company J', industry: 'Retail', employees: '2,300,000', headquarters: 'Bentonville, Arkansas', founded: '1962' },
    { id: 11, name: 'Company K', industry: 'Automotive/Energy', employees: '70,100', headquarters: 'London, United Kingdom', founded: '1909' },
    { id: 12, name: 'Company L', industry: 'Technoloy', employees: '75,400', headquarters: 'Beaverton, Oregon', founded: '1964' },
    { id: 13, name: 'Company M', industry: 'Automotive/Energy',  employees: '205,000', headquarters: 'Chicago, Illinois', founded: '1940' },
    { id: 14, name: 'Company N', industry: 'Technology', employees: '345,900', headquarters: 'Armonk, New York', founded: '1911' },
    { id: 15, name: 'Company O', industry: 'Beverages', employees: '86,200', headquarters: 'Atlanta, Georgia', founded: '1892' },
    { id: 16, name: 'Company P', industry: 'Automotive/Energy', employees: '141,000', headquarters: 'Chicago, Illinois', founded: '1916' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 8;
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = companiesData.slice(indexOfFirstCompany, indexOfLastCompany);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="companies-container">
      <h1>Companies</h1>
      <div className="companies">
        {currentCompanies.map((company) => (
          <div key={company.id} className="company">
            <h3>{company.name}</h3>
            <p>Industry:{company.industry}</p>
            <p>Employees: {company.employees}</p>
            <p>Headquarters: {company.headquarters}</p>
            <p>Founded: {company.founded}</p>
            <Link to={`/roles/${company.id}`}><button>Go to Roles Page</button></Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(companiesData.length / companiesPerPage) }, (_, i) => i + 1).map((number) => (
          <button key={number} onClick={() => paginate(number)} className={number === currentPage ? 'active' : ''}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Companies;
