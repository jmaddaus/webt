const LEFT_WIDTH = 45;
const MID_WIDTH = 20;
const EDU_WIDTH = 65;

const row = (col1, col2, col3) => {
    return `${col1.padEnd(LEFT_WIDTH)} ${col2.padEnd(MID_WIDTH)} ${col3}`;
};
const edu = (col1, col2) => {
    return `${col1.padEnd(EDU_WIDTH)} ${col2}`;
};

export default `
John Maddaus | jm@ddaus.dev
Software Engineer | Greater Boston Area

SUMMARY
---------
Hands-on Architect and Engineer with experience modernizing legacy systems in government and financial sectors. Expert in automating complex workflows while ensuring compliance. Transitioning from leadership back to a dedicated Engineering role to leverage strong algorithmic and architectural capabilities.

SKILLS
---------
Languages: Python, SQL, T-SQL, PowerShell, Perl, PHP
Infrastructure: Cloud (Azure/AWS), Serverless, MySQL, SQL Server
Tools: ETL/ELT, pandas, NumPy, Power Platform, Nintex
Sec/Compliance: NIST SP 800-53, SOC 2, FISMA, PCI DSS, GLBA, IAM

EXPERIENCE
----------
Information Systems Manager
${row("State of New Hampshire", "Concord, NH", "May 2021 - Present")}
•Migrated mission-critical agency systems to Microsoft Azure, maximizing system uptime and reducing annualized net hosting costs by over 20%, by directing a comprehensive lift-and-shift strategy to a scalable hybrid environment.
•Accelerated data migration timelines by 50% by developing custom Python middleware libraries for automated data preparation, processing, and legacy system integrations.
•Reduced average financial process turnaround time by over 80%, replacing legacy paper-based processes with automated modern workflows using Nintex Workflow Cloud and Microsoft Power Automate.
•Expanded the digital evidence ecosystem to support over 300 IoT endpoints by leading the integration of edge computing solutions including Axon Body Cameras, mobile infrastructure and thousands of RFID tags.
•Ensured continuous agency compliance and data integrity by enforcing NIST SP 800-53 controls and advising on statewide policy as a member of the NH Cybersecurity, Privacy, and Accessibility Advisory Committee.

Cloud Engineer / Independent Consultant
${row("Shrike Data, LLC", "Remote", "Jan 2020 - Dec 2021")}
•Architected data transformation platform on AWS, utilizing Lambda (Python) to automate scripts triggered by S3 events.
•Deployed and secured EC2 instances to host SFTP endpoints, bridging external vendors and client data pipelines.

IT Modernization Lead / Production Manager
${row("CBI/ABS", "Nampa, ID", "Jun 2019 - May 2021")}
•Developed a custom Python migration library (pandas, NumPy, multiprocessing) to parse proprietary legacy data formats, parallelizing processing and enabling the retirement of unsupported financial systems.
•Engineered integrations for credit reporting and payment processing, ensuring strict compliance (PCI DSS, GLBA, FCRA).
•Achieved SOC 2 Type 2 certification by leading the technical implementation of security controls and infrastructure auditing.
•Boosted revenue by over 30% by optimizing operations workflows and automating portfolio management.
•Piloted an NLP-driven virtual agent to generate dynamic near-real-time prompts for call center staff based on live call transcription, reducing training time and error rates.

Ops Manager (Systems) << Data Architect << DBA
${row("Delta Management Associates, Inc.", "Phoenix, AZ", "Feb 2011 - May 2019")}                 
•Saved 1,000+ labor hours of manual administrative work annually using Perl, Python and SQL automation to automate data ingestion across hundreds of client and vendor interfaces.
•Reduced the execution time of core reporting and business intelligence by over 95% through separating OLTP/OLAP database concerns, reengineering complex ETL pipelines and optimizing hundreds of SQL stored procedures.
•Generated double-digit revenue gains with custom composite ML credit risk/recovery scoring models using Python, SQL, and R.
•Increased integration development speed and system stability with legacy data architecture modernization and standardization.
•Hardened agency to comply with FISMA contracting standards by implementing cost-effective static-grid MFA.
•Improved customer contact rates by more than 20% with custom IVR decision trees and self-service agents.

EDUCATION AND CERTIFICATIONS
------
${edu("BS Computer Science (Expected Q1 2026)", "Western Governors University")}
${edu("BS Computer Information Systems", "University of New Hampshire")}
${edu("Azure Systems Architect Expert (AZ-305)", "Microsoft")}
${edu("Azure Administrator Associate (AZ-104)", "Microsoft")}
${edu("Certified Information Systems Security Professional (CISSP)", "ISC2")}  

`.trim();