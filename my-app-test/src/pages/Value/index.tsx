import Title from "@/component/Title"
import React from "react"
import styled from './index.module.css'


const Value: React.FC = () => {


    // Determine key environmental indicators
    const keyIndicators = [
        { name: 'Carbon footprint', description: 'The total carbon dioxide emissions generated during the life of the product.' },
        { name: 'Resource efficiency', description: 'The efficiency of the natural resources (e.g. water, energy) used by the product.' },
        { name: 'Recyclability', description: 'The degree of recyclability and tractability of a product after it ends use.' },
        { name: 'Environmental certification', description: 'Whether the product has received certification such as FSC (Forest Stewardship Council), Energy Star or Green Seal.' }
    ];

    // Define specific labels for each environmental metric
    const labels = {
        'Carbon footprint': 'Low carbon footprint',
        'Resource efficiency': 'Resources are high',
        'Recyclability': 'Fully recyclable',
        'Environmental certification': 'Obtain environmental certification'
    };

    // Label weights definition
    const labelWeights = {
        'Low carbon footprint': 0.2,
        'Resources are high': 0.3,
        'Fully recyclable': 0.3,
        'Obtain environmental certification': 0.2
    };

    // Function to calculate environmental value
    const calculateEnvironmentalValue = (labelPresence: Record<string, boolean>): number => {
        let totalValue = 0;
        for (const label in labelPresence) {
            if (labelPresence[label]) {
                totalValue += labelWeights[labels[label]];
            }
        }
        return totalValue;
    };

    return (
        <>
            <Title select='Value' />
            <div className={styled.styles}>
                <h2>ESG: Environmental, Social, and Governance</h2>
                <p>
                    ESG, short for Environmental, Social, and Governance, is a framework used by investors, corporations, and other stakeholders to evaluate a company's performance and sustainability practices beyond traditional financial metrics. This approach considers environmental, social, and governance factors to assess a company's impact on society and the environment, as well as its management practices and overall governance structure.
                </p>
                <h3>Environmental Factors</h3>
                <p>
                    Environmental factors within the ESG framework focus on a company's impact on the natural world. This includes considerations such as carbon emissions, energy efficiency, waste management, and water usage. Companies are increasingly evaluated based on their efforts to minimize their environmental footprint, mitigate climate change risks, and promote sustainable practices throughout their operations and supply chains.
                </p>
                <h3>Social Factors</h3>
                <p>
                    Social factors encompass a wide range of considerations related to a company's relationships with its employees, customers, suppliers, and the communities in which it operates. This may include labor practices, diversity and inclusion initiatives, human rights policies, product safety and quality, community engagement, and philanthropic efforts. Companies that prioritize social responsibility strive to create a positive impact on society while upholding ethical standards and respecting the rights and well-being of all stakeholders.
                </p>
                <h3>Governance Factors</h3>
                <p>
                    Governance factors focus on the structures and processes that govern a company's decision-making, accountability, and transparency. This includes aspects such as board diversity, executive compensation, shareholder rights, risk management practices, regulatory compliance, and adherence to ethical business practices. Strong governance practices are essential for maintaining trust with investors and stakeholders, ensuring integrity and accountability in corporate operations, and safeguarding long-term sustainability.
                </p>
                <h3>Importance of ESG</h3>
                <p>
                    The ESG framework is increasingly recognized as a valuable tool for investors seeking to integrate sustainability considerations into their investment decisions. By evaluating companies based on their ESG performance, investors can identify opportunities and risks that may not be captured by traditional financial analysis alone. This approach allows investors to align their investment portfolios with their values and sustainability goals while potentially enhancing long-term financial returns.
                </p>
                <p>
                    For corporations, adopting ESG principles can lead to various benefits, including improved risk management, enhanced reputation and brand value, access to capital, and increased resilience to environmental, social, and regulatory challenges. Embracing ESG also fosters innovation and drives operational efficiency as companies seek to optimize their performance across environmental, social, and governance dimensions.
                </p>
                <h3>Regulatory Impact</h3>
                <p>
                    Furthermore, ESG considerations are increasingly shaping regulatory requirements and disclosure standards worldwide. Governments and regulatory bodies are recognizing the importance of ESG factors in driving sustainable development and are implementing policies and frameworks to encourage corporate transparency and accountability.
                </p>
                <h3>Conclusion</h3>
                <p>
                    In summary, ESG represents a holistic approach to evaluating companies' performance and sustainability practices, encompassing environmental, social, and governance factors. By integrating ESG considerations into investment decisions and corporate strategies, stakeholders can promote responsible and sustainable business practices that benefit both society and the planet.
                </p>
                <h2>Company Culture</h2>
                <ul>
                    <li>
                        <strong>Core commitment to environmental protection and sustainable development:</strong> New Century's corporate culture revolves around an unwavering dedication to environmental protection and sustainable development. This commitment is reflected in every aspect of the company's operations, from assisting customers in reducing their carbon footprint to ensuring that all products and services meet the highest environmental standards.
                    </li>
                    <li>
                        <strong>Innovation and technology integration:</strong> New Century places a strong emphasis on utilizing innovative technologies to address environmental challenges. Collaborations with high-tech companies like IntFly have resulted in the development of advanced sustainable resource platforms, showcasing the company's commitment to leveraging technology for environmental efficiency.
                    </li>
                    <li>
                        <strong>Continuous education and staff development:</strong> The company invests in the ongoing education and professional growth of its employees, offering regular training on environmental best practices and providing opportunities for personal development. This culture of continuous learning ensures that team members are equipped with the latest knowledge and skills in environmental sustainability.
                    </li>
                    <li>
                        <strong>Transparency and accountability:</strong> Transparency and accountability are fundamental principles of New Century's corporate culture. The company maintains open communication channels to ensure that stakeholders are well-informed about its environmental initiatives and actions, fostering trust and credibility.
                    </li>
                    <li>
                        <strong>Industry leadership and community involvement:</strong> In addition to promoting sustainability through its business practices, New Century takes a leadership role in environmental protection by actively participating in community and global initiatives. Through collaborations and partnerships, the company strives to advance the environmental agenda and demonstrate its industry leadership.
                    </li>
                    <li>
                        <strong>Employee engagement and satisfaction:</strong> New Century values employee engagement and satisfaction, fostering a supportive work environment that encourages innovation and participation. Regular feedback mechanisms and satisfaction surveys ensure that employees feel empowered and recognized for their contributions to the company's environmental efforts.
                    </li>
                </ul>

                <h2>Environmental Value Calculation</h2>
                <h3>Key Environmental Indicators:</h3>
                <ul>
                    {keyIndicators.map(indicator => (
                        <li key={indicator.name}>
                            <strong>{indicator.name}:</strong> {indicator.description}
                        </li>
                    ))}
                </ul>
                <h3>Label Definitions:</h3>
                <ul>
                    {Object.entries(labels).map(([indicator, label]) => (
                        <li key={indicator}>
                            <strong>{indicator}:</strong> {label}
                        </li>
                    ))}
                </ul>
                <h3>Label Weights:</h3>
                <ul>
                    {Object.entries(labelWeights).map(([label, weight]) => (
                        <li key={label}>
                            <strong>{label}:</strong> {weight}
                        </li>
                    ))}
                </ul>
                <h3>Environmental Value Calculation Example:</h3>
                <p>Assuming labels are present as follows:</p>
                <ul>
                    {Object.keys(labels).map(label => (
                        <li key={label}><strong>{label}:</strong> Present</li>
                    ))}
                </ul>
                <p>Total Environmental Value: {calculateEnvironmentalValue({ ...labels })}</p>
            </div >


        </>
    )
}

export default Value