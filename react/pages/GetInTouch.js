import React from 'react'

function GetInTouch() {
    return (
        <div className="GetInTouch">
            {/* <head>
                <meta charset="utf-8" />
                <title>ALTRUIST FAQ</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.min.css" />

                <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
                <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
            </head> */}
            <div class="container">
                <div class="page-header">
                    <h1>ALTRUIST FAQ <small>ALTRUIST Frequently Asked Questions</small></h1>
                </div>


                <div class="container">
                    <br />
                    <br />
                    <br />

                    <div class="alert alert-warning alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        This section contains a wealth of information, related to <strong>ALTRUIST</strong> Website and working.If you cannot find an answer to your question, 
                        make sure to get in touch with us. 
                    </div>
                    <br />
                    <div class="panel-group" id="accordion">
                        <div class="faqHeader"><h1>General questions</h1></div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven"><strong>How to Log-in?</strong></a>
                                </h4>
                            </div>
                            <div id="collapseEleven" class="panel-collapse collapse">
                                <div class="panel-body">
                                    It is very simple just enter into any of the page chat or NGO it will redirect to login page where you can login through your google account and enjoy the service!!!
                                </div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><strong>Is Log-in required?</strong></a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse in">
                                <div class="panel-body">
                                    Account Log-in at <strong>ALTRUIST</strong> is only required if you want to use <strong>Chat </strong> option and <strong>NGO list,there contacts</strong>. 
                                    This ensures a valid communication channel for all the users and inform them what the website is all about. 
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTen"><strong>Can I Log-in through any other platform?</strong></a>
                                </h4>
                            </div>
                            <div id="collapseTen" class="panel-collapse collapse">
                                <div class="panel-body">
                                For now its a NO, As lot of users use google account we have provided that option.
                                </div>
                            </div>
                        </div>

                        <div class="faqHeader"><h1>About NGO</h1></div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"><strong>How to contact NGO</strong></a>
                                </h4>
                            </div>
                            <div id="collapseFour" class="panel-collapse collapse">
                                <div class="panel-body">
                                    Follow these steps:
                                <ul>
                                <li>Wisiting our NGO page needs access</li> 
                                <li>Login through your google account</li>
                                <li>After login you will see a huge list of NGO's</li>
                                <li>Contact any of the NGO through their number or mail provided </li>
                            </ul>

                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven"><strong>Which are all categories in NGO list</strong></a>
                                </h4>
                            </div>
                            <div id="collapseSeven" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <ol>
                                        <li>Animal Husbandry</li>
                                        <li>Aged/Elderlly</li>
                                        <li>Agriculture</li>
                                        <li>Art and culture</li>
                                        <li>Education</li>
                                        <li>Education and Literacy </li>
                                        <li>Children Welfare</li>
                                        <li>Human Rights</li>
                                        <li>Women Development and Empowerment </li>
                                        <li>Labour and Employment</li>
                                        <li>HIV/AIDS</li>
                                        <li>Disater managment </li>
                                        <li>Water Resources</li>
                                        <li>Panchayati Raj</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;
