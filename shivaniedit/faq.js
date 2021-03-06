import React from 'react'

function GetInTouch() {
    return (
        <div className="GetInTouch">

<html>
    {/* <head>
        <title>FAQ's</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="faq.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap" rel="stylesheet">
    </head> */}
    <body>
        <header class="cd-header flex flex-column flex-center">
            <div class="text-component text-center">
                <h1>ALTRUIST FAQ</h1>
            </div>
        </header>
        <div class="container">
            {/* Sub category 1 */}
            <h2>General Questions</h2>
            <details>
                 <summary>How to Login?</summary>     
                 <p>It is very simple, just enter into Login page. Here you will be displayed with Login button where you can login through your Google account and enjoy the services!!!</p>  
            </details>
            <details>
                 <summary>Is Login required?</summary>
                 <p>Account Login <strong>ALTRUIST</strong>is only required if you want to use chat option.<br/> This ensures a valid communication channel for all the ussers anf inform them what the website is all about.</p>
            </details>
            <details>
                 <summary>Can I Login through any other Platform?</summary>
                 <p>For now its a <strong>NO</strong>, as lot of users use Google account we have provided that option.</p>
            </details>
            
            {/* Sub category 2 */}
            <h2>About NGO</h2>
            <details>
                 <summary>How yo contact NGO?</summary>
                 <p>Follow these steps:
                     <ul>
                         <li>Visit our NGO page.</li>
                         <li>You will be viewing a huge lists of NGO's which are categorised into different categories.</li>
                         <li>Contact any of the NGO's you wish to through their contact number or Email id provided.</li>
                     </ul>
                 </p>
             </details>
            <details>
                 <summary>Which are all the categories in NGO list?</summary>
                 <p>Their are 14 categories in NGO list provided:
                     <ol>
                         <li>Animal Husbandry</li>
                         <li>Aged/Elderly</li>
                         <li>Agriculture</li>
                         <li>Art and Culture</li>
                         <li>Education</li>
                         <li>Education and Literacy</li>
                         <li>Children Welfare</li>
                         <li>Human Rights</li>
                         <li>Women Development and Empowerment</li>
                         <li>Labour and Employment</li>
                         <li>HIV/AIDS</li>
                         <li>Disaster Management</li>
                         <li>Water Resources</li>
                         <li>Panchayati Raj</li>
                     </ol>
                 </p>
            </details>
         </div>
    </body>
</html>
        </div>
    )
}

export default GetInTouch;
