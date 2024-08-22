import './ExperiencePage.css';
import { Timeline, Text } from '@mantine/core';
import Page from '../Page/Page';

const EXPERIENCES = [
    {
        title: "Software Engineer Intern",
        company: "Constant Contact",
        dateAndLocation: "Waltham, MA (Jan 2024 - Apr 2024)",
        description: "Vital contributions to the <b>Innovation Lab R&D</b> team \
                      responsible for delivering a smart contact ingestion pipeline to \
                      enhance data platform needs and provide seamless customer onboarding.",
        stats: [
            { top: "Importing", middle: "70M", bottom: "contacts monthly"},
            { top: "Generated", middle: "$20k", bottom: "monthly revenue"},
            { top: "Serving", middle: "200k", bottom: "users monthly"},
        ]
    },
    {
        title: "Software Engineer Intern",
        company: "Canon",
        dateAndLocation: "Waterloo, ON (May 2023 - Aug 2023)",
        description: "Medical informatics division focussing on <b>platform and infrastructure</b> needs \
                      of the organization, including effective data distribution for searchability, database \
                      size reduction, and continuous integration.",
        stats: [
            { top: "Reduction of", middle: "30%", bottom: "in Cassandra table size"},
            { top: "Annually indexed", middle: "7M", bottom: "image metadata fragments"},
        ]
    },
    {
        title: "Software Engineer Intern",
        company: "Canon",
        dateAndLocation: "Waterloo, ON (Sept 2022 - Dec 2022)",
        description: "Developing ETL Pipelines, distributed synchronization and concurrency \
                      mechanisms in multi-node clusers, node-level caching with write-through \
                      policies, and upgrade automation for <b>Latest Product Release</b> team.",
        stats: []
    },
    {
        title: "Full Stack Developer",
        company: "Computer Science Computing Facility (Division of UWaterloo)",
        dateAndLocation: "Waterloo, ON (Jan 2022 - Apr 2022)",
        description: "Writing interface for management of compute resource provisioning with a \
                      focus on database provisions, and UI development to accompany added feature \
                      releases.",
        stats: []
    },
]

function StatCard({ data }) {
    return (
        <div className="stat-card">
            <p className="stat-top">{data.top}</p>
            <p className="stat-middle">{data.middle}</p>
            <p className="stat-bottom">{data.bottom}</p>
        </div>
    );
}

function ExperiencePage() {

    return (
        <Page title='EXPERIENCE'>
             <Timeline color="#1F1C1C" active={EXPERIENCES.length} bulletSize={24} lineWidth={3}>
                {
                    EXPERIENCES.map((exp, i) => {
                        return (
                            <Timeline.Item 
                                title={<h4 className="exp-title">{exp.title}</h4>} 
                                key={i} 
                                bullet={<></>}
                            >
                                <p className="exp-company">{exp.company}</p>
                                <p className="exp-dates-location">{exp.dateAndLocation}</p>
                                <p className="exp-description" 
                                    dangerouslySetInnerHTML={{__html: exp.description}}
                                />
                                {exp.stats.length > 0 && (
                                    <div className={"stats-carousel"}>
                                        {exp.stats.map(data => <StatCard data={data}/>)}
                                    </div>
                                )}
                            </Timeline.Item>
                        )
                    })
                }
            </Timeline>
        </Page>
    );
}

export default ExperiencePage;
