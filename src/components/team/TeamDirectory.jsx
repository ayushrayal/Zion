import React, { useState, useMemo } from 'react';
import Container from '../layout/Container';
import { teamMembers, teamDepartments } from '../../data/teamData';
import './TeamDirectory.css';

export default function TeamDirectory() {
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Department counts
  const departmentCounts = useMemo(() => {
    const counts = { all: teamMembers.length };
    teamMembers.forEach((m) => {
      counts[m.departmentId] = (counts[m.departmentId] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter members based on department and search
  const filteredMembers = useMemo(() => {
    return teamMembers.filter((m) => {
      const matchesDept = activeDepartment === 'all' || m.departmentId === activeDepartment;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.designation.toLowerCase().includes(q) ||
        m.departmentLabel.toLowerCase().includes(q) ||
        (m.focus && m.focus.toLowerCase().includes(q));

      return matchesDept && matchesSearch;
    });
  }, [activeDepartment, searchQuery]);

  return (
    <section id="team-directory" className="team-directory-section section-wrapper" aria-labelledby="directory-heading">
      <Container className="team-directory-container">
        {/* Section Header */}
        <div className="directory-header">
          <div className="directory-header-pill">
            <span className="directory-header-dot" />
            <span>SPECIALIST DIRECTORY</span>
          </div>
          <h2 id="directory-heading" className="directory-title">
            Our Multidisciplinary Faculty &amp; Practitioners
          </h2>
          <p className="directory-subtitle">
            Meet the experienced speech pathologists, neurodevelopmental therapists, pediatric
            physiotherapists, special educators, and coordinators guiding each child's individual path.
          </p>
        </div>

        {/* Filter Toolbar: Department Tabs & Search Input */}
        <div className="directory-controls">
          <div className="department-filter-tabs" role="tablist" aria-label="Team department filters">
            {teamDepartments.map((dept) => {
              const count = departmentCounts[dept.id] || 0;
              const isActive = activeDepartment === dept.id;
              return (
                <button
                  key={dept.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`dept-filter-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveDepartment(dept.id)}
                >
                  <span className="filter-tab-label">{dept.label}</span>
                  <span className="filter-tab-count">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="directory-search-wrapper">
            <label htmlFor="team-search" className="sr-only">Search team members</label>
            <div className="search-input-box">
              <span className="search-icon" aria-hidden="true">🔍</span>
              <input
                id="team-search"
                type="text"
                placeholder="Search by name, role or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="directory-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Result Status Meta */}
        <div className="directory-status-meta">
          <span>
            Showing <strong>{filteredMembers.length}</strong> of <strong>{teamMembers.length}</strong> team members
            {activeDepartment !== 'all' && (
              <> in <em>{teamDepartments.find((d) => d.id === activeDepartment)?.label}</em></>
            )}
          </span>
          {(activeDepartment !== 'all' || searchQuery) && (
            <button
              type="button"
              className="reset-filters-btn"
              onClick={() => {
                setActiveDepartment('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Members Cards Grid */}
        {filteredMembers.length > 0 ? (
          <div className="team-cards-grid">
            {filteredMembers.map((member) => (
              <article
                key={member.id}
                className={`team-member-card card-accent-${member.color}`}
                aria-label={`${member.name}, ${member.designation}`}
              >
                {/* Portrait Frame */}
                <div className="member-image-frame">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.designation}`}
                    className="member-portrait-img"
                    loading="lazy"
                  />
                  <div className="member-image-overlay" />
                  <span className={`member-dept-badge badge-${member.color}`}>
                    {member.departmentLabel}
                  </span>
                </div>

                {/* Card Information */}
                <div className="member-card-body">
                  <div className="member-name-block">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-designation">{member.designation}</p>
                  </div>

                  {member.focus && (
                    <div className="member-focus-box">
                      <span className="focus-label">Core Focus &amp; Clinical Areas</span>
                      <p className="focus-text">{member.focus}</p>
                    </div>
                  )}

                  <div className="member-card-footer">
                    <span className={`status-pill pill-${member.color}`}>
                      <span className="status-dot" />
                      Active Specialist
                    </span>
                    <a
                      href="/#contact"
                      className="member-consult-link"
                      aria-label={`Consult with ${member.name}`}
                    >
                      Consult ➔
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-members-found">
            <p className="no-members-title">No team members match your search.</p>
            <p className="no-members-sub">Try adjusting your keywords or clearing the department filter.</p>
            <button
              type="button"
              className="reset-filters-btn large"
              onClick={() => {
                setActiveDepartment('all');
                setSearchQuery('');
              }}
            >
              Show All Team Members
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
