// extract id from url
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

const projects = [
    {
        "Title": "ShotPerfect",
        "Description": "ShotPerfect is an AI-driven platform designed to enhance cricket players' performance by analyzing their shots. The web application, developed using Next.js and Flask, provides detailed insights and feedback to help players refine their techniques. ShotPerfect employs advanced computer vision and machine learning algorithms to classify shots, detect bat and ball interactions, and assess player posture. The platform also generates personalized coaching feedback, making it an invaluable tool for cricketers aiming to perfect their game.",
        "Category": "AI / Web App",
        "Tagline": "Refine your batting skills with the help of AI.",
        "Display": "./assets/video/shot-perfect.mp4"
    },
    {
        "Title": "Wheat Insight",
        "Description": "Wheat Insight leverages UAV imagery and advanced data analytics to monitor the health and growth of wheat crops. This innovative platform helps farmers predict yield, optimize resource utilization, and make informed decisions to maximize crop productivity. By providing real-time insights and alerts on crop health, Wheat Insight enables farmers to address potential issues proactively, ensuring sustainable and efficient farming practices.",
        "Category": "Agriculture/AI",
        "Tagline": "Empowering farmers with data-driven insights.",
        "Display": "./assets/video/wheat-insight.mp4"
    },
    {
        "Title": "CrackPong",
        "Description": "Crack Pong is an interactive game that combines computer vision techniques with user engagement. Players watch a live-rendered video of an air hockey game and must predict where the puck will pass to place a virtual crack and earn points. This game challenges players' predictive skills and provides an entertaining way to interact with AI-driven gameplay.",
        "Category": "Gaming/Computer Vision",
        "Tagline": "Predict the puck's path, place the crack, and score!",
        "Display": "./assets/video/crack-pong.mp4"
    },
    {
        "Title": "Photo to Sketch",
        "Description": "Photo to Sketch is a creative application that transforms photographs into various artistic sketch styles. Utilizing state-of-the-art generative models, the tool allows users to generate detailed and realistic sketches from their photos. This application caters to artists, designers, and enthusiasts looking to add a unique touch to their digital creations, offering a range of styles from simple line drawings to complex artistic renditions.",
        "Category": "Generative AI",
        "Tagline": "Turning your photos into unique sketches.",
        "Display": ["./assets/img/portfolio/photo-sketch-1.png", "./assets/img/portfolio/photo-sketch-2.png"]
    },
    {
        "Title": "Baggage X-ray Image-Based Contraband Detection",
        "Description": "It is a security system designed to detect prohibited items in baggage using advanced image analysis. By implementing cutting-edge object detection algorithms, the system enhances security at airports and other facilities by accurately identifying contraband items. This technology significantly improves the efficiency and effectiveness of security checks, ensuring the safety and security of passengers and personnel.",
        "Category": "Security/AI",
        "Tagline": "Ensuring safe travels with advanced baggage security.",
        "Display": "./assets/video/baggage-x-ray.mp4"
    },
    {
        "Title": "Parkinson's Disease Detection",
        "Description": "The Parkinson's Disease Detection project focuses on classifying the disease by analyzing voice data. This non-invasive method provides an early detection mechanism that helps in timely medical intervention and management of Parkinson's disease. By identifying subtle changes in voice patterns, the system offers a reliable and efficient way to monitor the progression of the disease and assess treatment efficacy.",
        "Category": "Healthcare/AI",
        "Tagline": "Early detection of Parkinson's through voice analysis.",
        "Display": ["./assets/img/portfolio/parkinson.png"]
    },
    {
        "Title": "Heart Disease Classification",
        "Description": "The Heart Disease Classification project aims to assess the risk of heart disease using patient data. This tool helps healthcare providers identify high-risk individuals, facilitating preventive care and targeted treatments. By analyzing various health parameters, the system provides insights into heart health, enabling timely interventions and improving patient outcomes.",
        "Category": "Healthcare/AI",
        "Tagline": "Predicting heart health for better patient care.",
        "Display": ["./assets/img/portfolio/heart.png"]
    },
    {
        "Title": "Anomaly Detection In Credit Card Fraud Dataset",
        "Description": "This project addresses the detection of fraudulent transactions in credit card datasets. By analyzing transaction patterns and identifying anomalies, the system enhances financial security and protects users and institutions from fraud. This advanced detection mechanism helps in early identification of fraudulent activities, reducing financial losses and maintaining trust in financial systems.",
        "Category": "Finance/AI",
        "Tagline": "Securing your transactions with fraud detection.",
        "Display": ["./assets/img/portfolio/anamoly.png"]
        },
    {
        "Title": "Incremental Face Recognition",
        "Description": "Incremental Face Recognition is a dynamic system designed to continually learn and recognize new faces. This solution ensures high accuracy and up-to-date recognition capabilities, making it ideal for environments where personnel frequently change. By updating its database incrementally, the system maintains high performance and reliability, providing a robust security measure for various applications.",
        "Category": "Security/AI",
        "Tagline": "Recognizing faces with adaptive accuracy.",
        "Display":  ["./assets/img/portfolio/face-recognition.png"]
    },
    {
        "Title": "Supply Demand Forecasting of Uber Dataset",
        "Description": "This project focuses on predicting the supply and demand for ride-hailing services using Uber's dataset. By analyzing historical data and identifying patterns, the system helps optimize fleet management and improve service efficiency. Accurate forecasting of demand ensures that resources are allocated effectively, enhancing the overall user experience and operational performance of ride-hailing services.",
        "Category": "Transportation/AI",
        "Tagline": "Optimizing ride-hailing services through accurate forecasting.",
        "Display": ["./assets/img/portfolio/uber.png"] 
    },
    // {
    //     "Title": "Crack Pong",
    //     "Description": "Crack Pong is an interactive game that utilizes computer vision techniques. Players watch a live-rendered video of an air hockey game and must predict where the puck will pass to place a virtual crack, earning points for accurate predictions.",
    //     "Category": "Gaming/Computer Vision"
    // }
];


document.querySelector('.page-title h1').innerHTML = projects[id].Title;
document.querySelector('.page-title p').innerHTML = projects[id].Tagline


document.querySelector('.portfolio-description p').innerHTML = projects[id].Description;

document.querySelector('.portfolio-info ul li:first-child').innerHTML  = `<strong>Category</strong>: ${projects[id].Category}`;

// if project.diplay > 1 or ends with .png
if (projects[id].Display instanceof Array || projects[id].Display.endsWith('.png') ) {
    console.log('here');
    console.log(projects[id].Display);
    for (let i = 0; i < projects[id].Display.length; i++) {
        document.querySelector('.portfolio-details-slider .swiper-wrapper').innerHTML += `<div class="swiper-slide"><img src=${projects[id].Display[i]} alt="Image"></div>`;
    }
}
else if (projects[id].Display.endsWith('.mp4'))
{
    //remove the swipper  and add the video
    document.querySelector('.portfolio-details-slider .swiper-wrapper').remove();
    document.querySelector('.portfolio-details-slider .swiper-pagination').remove();
    document.querySelector('.portfolio-details-slider').innerHTML = `<video
          src=${projects[id].Display}
          autoplay
          loop
          muted
          style="width: 100%; height: 100%; object-fit: cover;"
          controls
        ></video>`
}