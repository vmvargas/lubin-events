angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
    console.log("Hello1");
    console.log($resource.sessionId);
    console.log("Hello2");
    return $resource('http://172.20.104.142:5000/sessions/:sessionId');
})

.factory('singleSesson', function($resource){
    var session_own = [
  {
    "Event_id": 0,
    "Sponsored_by": "Beta Alpha Psi, the Graduate Finance Club, the Investment Club, and Career Services",
    "Headline": "Hidden Opportunities in Finance Panel",
    "Subheader": "",
    "AnnouncementFor": "Both",
    "Email": "bappace@gmail.com",
    "Start_Month": 10,
    "Start_Day": 17,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 10,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 10,
    "End_Time_AMPM": "p.m.",
    "Room": "Bianco Room",
    "Building": "",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "There are many great jobs in Finance on Wall Street, but many of them are not advertised or well known to students. This panel on the hidden opportunities in finance will introduce and educate you on a variety of job possibilities including but not limited to: Asset Management, Global Transaction Services and Inter-Dealer Brokerage. Come listen, learn and have some lunch! Sponsored by Beta Alpha Psi, the Graduate Finance Club, the Investment Club and Career Services.*Business casual attire is required (No jeans, sneakers, t-shirts or short skirts/dresses)**The use of cell phone and laptop is forbidden during this event***Please arrive at least ten minutes before the event time**** 1.2 professional hours will be given",
    "EnableTag": "",
    "SubmitionDateTime": "",
    "": ""
  },
  {
    "Event_id": 1,
    "Sponsored_by": "Beta Alpha Psi",
    "Headline": "IBM: Careers and Internships in Information Systems",
    "Subheader": "",
    "AnnouncementFor": "Both",
    "Email": "bappace@gmail.com",
    "Start_Month": 10,
    "Start_Day": 18,
    "Start_Year": 2016,
    "Start_TimeHr": 3,
    "Start_TimeMin": 25,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 4,
    "End_Time_Min": 25,
    "End_Time_AMPM": "p.m.",
    "Room": "W606",
    "Building": "",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "https://goo.gl/vsnqrB",
    "Message": "IBM's Data Analyst, Tarangit Vachhani, and Cybersecurity Intern, Anum Shaikh, will be visiting Pace University to talk about careers and internship opportunities in Information Systems. Tarangit works as a Data Integration Analyst where he works with a team to migrate and integrate legacy systems to the cloud. Anum interned at IBM this summer with the Risk and Security team where she worked on creating a tool to discover, investigate and remediate unregistered devices on the IBM network. Please join us on Tuesday to discover the career opportunities available in Information Systems and what it is like to work at IBM! *Business casual attire is required (No jeans, sneakers, t-shirts or short skirts/dresses)**The use of cell phone and laptop is forbidden during this event***Please arrive at least ten minutes before the event time**** 1.2 hours will be given",
    "EnableTag": 1,
    "SubmitionDateTime": "35:11.1",
    "": ""
  },
  {
    "Event_id": 2,
    "Sponsored_by": "Ascend",
    "Headline": "Halloween Haunted Walk in Prospect Park",
    "Subheader": "",
    "AnnouncementFor": "Both",
    "Email": "ascend.pace@gmail.com",
    "Start_Month": 10,
    "Start_Day": 29,
    "Start_Year": 2016,
    "Start_TimeHr": 10,
    "Start_TimeMin": 30,
    "Start_TimeAMPM": "a.m.",
    "End_Time_Hr": 4,
    "End_Time_Min": 0,
    "End_Time_AMPM": "p.m.",
    "Room": "",
    "Building": "",
    "Campus": "Off Campus",
    "Off_Campus_Address": "Prospect Park",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "Getting ready for a fun Halloween? Ready to have an exciting and hauntingly great time in New York? Join us now!Celebrate Halloween by helping with the behind the scenes preparations for the 34th Annual Halloween Haunted Walk in Prospect Park. Volunteers will serve as Tour Guides and are responsible for bringing groups of families through the Haunted Walk.Lurking high on Lookout Hill are zombies, wolf men, headless horsemen, witches, and your favorite supernatural characters!Please arrive at least 10 minutes earlier.Please register with your daily check email to receive important information.Spots are limited. First come first serve.For interested participants, please register at the following link:https://www.eventbrite.com/e/halloween-haunted-walk-in-prospect-park-tickets-28255694543Location: Prospect Park, 16th Street Entrance at Prospect Southwest  Brooklyn, NY 11218",
    "EnableTag": 0,
    "SubmitionDateTime": "35:56.3",
    "": ""
  },
  {
    "Event_id": 3,
    "Sponsored_by": "Beta Alpha Psi",
    "Headline": "Information Systems: Careers, Certifications & IT Auditing with Dr. James Gabberty",
    "Subheader": "",
    "AnnouncementFor": "Both",
    "Email": "bappace@gmail.com",
    "Start_Month": 10,
    "Start_Day": 19,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 10,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 10,
    "End_Time_AMPM": "p.m.",
    "Room": "W614",
    "Building": "",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "https://goo.gl/F5pTJv",
    "Message": "Information technology auditors are in high demand! IT auditing is the examination and evaluation of an organization's information technology infrastructure, policies and operations. Information technology audits determine whether IT controls protect corporate assets, ensure data integrity and are aligned with the business's overall goals. Come explore careers in Information Systems, the certifications available, and learn about how to enter the field of IT Auditing. Dr. James Gabberty is an Information and Communication Technology practitioner with 30+ years of experience in academia and industry. Prior to his current position as Professor of Information Systems and Associate Dean for External Relations, he helped build large-scale systems in the banking & brokerage industry in New York City's financial community. *Business casual attire is required (No jeans, sneakers, t-shirts or short skirts/dresses)**The use of cell phone and laptop is forbidden during this event***Please arrive at least ten minutes before the event time**** 1.2 hours will be given  ",
    "EnableTag": 1,
    "SubmitionDateTime": "36:16.8",
    "": ""
  },
  {
    "Event_id": 4,
    "Sponsored_by": "Beta Alpha Psi",
    "Headline": "BAP Investment Group Meeting",
    "Subheader": "",
    "AnnouncementFor": "Both",
    "Email": "bappace@gmail.com",
    "Start_Month": 10,
    "Start_Day": 20,
    "Start_Year": 2016,
    "Start_TimeHr": 3,
    "Start_TimeMin": 25,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 4,
    "End_Time_Min": 25,
    "End_Time_AMPM": "p.m.",
    "Room": "W507",
    "Building": "",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "https://docs.google.com/forms/d/e/1FAIpQLSdr95AaWK7Jp5VqI0C3Xmzc6NhzrL3-puSE0K_pQIQqJ-6_qw/viewform",
    "Message": "Come and join Beta Alpha Psi's Investment Group on Thursday, October 20 to learn more about Options trading! An option, which is either used for speculation or hedging, is a contract that gives the buyer the right, but not the obligation, to buy or sell an underlying asset at a specific price on or before a certain date. Want to learn how to use Options? The event's speaker will interpret financial derivatives and how to utilize them in the stock market. We hope to see you there!*Please arrive at least ten minutes before the event time**1.2 professional hours will be given",
    "EnableTag": 1,
    "SubmitionDateTime": "37:27.3",
    "": ""
  },
  {
    "Event_id": 5,
    "Sponsored_by": "Pace University INFORMS chapter",
    "Headline": "Citigroup - Treasury and Trade Solutions Summer Analyst Program",
    "Subheader": "Learn about the Summer Analyst Program",
    "AnnouncementFor": "Both",
    "Email": "pl12790n@pace.edu",
    "Start_Month": 10,
    "Start_Day": 26,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 0,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 30,
    "End_Time_AMPM": "p.m.",
    "Room": "Lecture Hall North",
    "Building": "One Pace Plaza",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Business casual",
    "Food_Provided": "Meal",
    "Attachment_Link": "",
    "RSVP_Link": "https://pace.joinhandshake.com/events/30986/share_preview",
    "Message": "You're ready to bring your knowledge from the classroom to the boardroom, and Citi wants to help you get there. Whether it's honing your skills or building your network, we know that success can't come without growth. Our programs equip you with the knowledge and training you need to play a valuable role on your team, and establish a long-term career here. At Citi, we value internal mobility, and career growth is not a question of if, but when.",
    "EnableTag": "",
    "SubmitionDateTime": "",
    "": ""
  },
  {
    "Event_id": 8,
    "Sponsored_by": "Career Services",
    "Headline": "Interview Workshop",
    "Subheader": "",
    "AnnouncementFor": "Both",
    "Email": "pking2_tmp@pace.edu",
    "Start_Month": 10,
    "Start_Day": 20,
    "Start_Year": 2016,
    "Start_TimeHr": 3,
    "Start_TimeMin": 25,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 4,
    "End_Time_Min": 25,
    "End_Time_AMPM": "p.m.",
    "Room": "W626",
    "Building": "One Pace Plaza",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "Develop the skills to get the internship! Discuss difficult questions asked by employers and learn different interview formats. This workshop is highly recommended for ALL students in order to better prepare you for upcoming interviews!Please register on Handshake.",
    "EnableTag": 1,
    "SubmitionDateTime": "24:04.0",
    "": ""
  },
  {
    "Event_id": 9,
    "Sponsored_by": "Career Services",
    "Headline": "Job Search Strategies",
    "Subheader": "",
    "AnnouncementFor": "Both",
    "Email": "pking2_tmp@pace.edu",
    "Start_Month": 11,
    "Start_Day": 4,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 10,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 10,
    "End_Time_AMPM": "p.m.",
    "Room": "W616",
    "Building": "One Pace Plaza",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "This workshop is your first step to starting your job search. Discover essential job search strategies and methods to ensure a successful job hunt and finding the right opportunity for your career path. Please register on Handshake.",
    "EnableTag": 1,
    "SubmitionDateTime": "31:32.5",
    "": ""
  },
  {
    "Event_id": 11,
    "Sponsored_by": "Career Services",
    "Headline": "Getting Started Workshop / Orientation",
    "Subheader": "",
    "AnnouncementFor": "Both",
    "Email": "pking2_tmp@pace.edu",
    "Start_Month": 11,
    "Start_Day": 10,
    "Start_Year": 2016,
    "Start_TimeHr": 3,
    "Start_TimeMin": 25,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 4,
    "End_Time_Min": 25,
    "End_Time_AMPM": "p.m.",
    "Room": "W626",
    "Building": "One Pace Plaza",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "This workshop provides international students assistance with the necessary internship eligibility paperwork. It explains how students can get involved on and off campus and how to get \"market ready\" to do internships, as well as discuss things to look out for in the internship search process. Please register on Handshake.",
    "EnableTag": 0,
    "SubmitionDateTime": "47:31.7",
    "": ""
  },
  {
    "Event_id": 12,
    "Sponsored_by": "Career Services",
    "Headline": "Getting Started With Career Services",
    "Subheader": "Workshop / Orientation",
    "AnnouncementFor": "Both",
    "Email": "pking2_tmp@pace.edu",
    "Start_Month": 11,
    "Start_Day": 14,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 10,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 10,
    "End_Time_AMPM": "p.m.",
    "Room": "W626",
    "Building": "One Pace Plaza",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "This workshop provides international students assistance with the necessary internship eligibility paperwork. It explains how students can get involved on and off campus and how to get \"market ready\" to do internships, as well as discuss things to look out for in the internship search process. Please register through Handshake.",
    "EnableTag": "",
    "SubmitionDateTime": "",
    "": ""
  },
  {
    "Event_id": 14,
    "Sponsored_by": "Career Services",
    "Headline": "Getting Started Workshop / Orientation",
    "Subheader": "",
    "AnnouncementFor": "Both",
    "Email": "pking2_tmp@pace.edu",
    "Start_Month": 11,
    "Start_Day": 28,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 10,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 10,
    "End_Time_AMPM": "p.m.",
    "Room": "W626",
    "Building": "One Pace Plaza",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "This workshop provides international students assistance with the necessary internship eligibility paperwork. It explains how students can get involved on and off campus and how to get \"market ready\" to do internships, as well as discuss things to look out for in the internship search process. Please register on Handshake.",
    "EnableTag": 1,
    "SubmitionDateTime": "59:23.3",
    "": ""
  },
  {
    "Event_id": 17,
    "Sponsored_by": "Career Services",
    "Headline": "Getting Started Workshop / Orientation",
    "Subheader": "",
    "AnnouncementFor": "Both",
    "Email": "pking2_temp@pace.edu",
    "Start_Month": 12,
    "Start_Day": 8,
    "Start_Year": 2016,
    "Start_TimeHr": 3,
    "Start_TimeMin": 25,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 4,
    "End_Time_Min": 5,
    "End_Time_AMPM": "p.m.",
    "Room": "W626",
    "Building": "One Pace Plaza",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "This workshop provides international students assistance with the necessary internship eligibility paperwork. It explains how students can get involved on and off campus and how to get \"market ready\" to do internships, as well as discuss things to look out for in the internship search process. Please register on Handshake. ",
    "EnableTag": 1,
    "SubmitionDateTime": "11:35.8",
    "": ""
  },
  {
    "Event_id": 18,
    "Sponsored_by": "Career Services",
    "Headline": "Getting Started Workshop / Orientation",
    "Subheader": "",
    "AnnouncementFor": "Both",
    "Email": "pking2_tmp@pace.edu",
    "Start_Month": 12,
    "Start_Day": 12,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 10,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 10,
    "End_Time_AMPM": "p.m.",
    "Room": "W626",
    "Building": "One Pace Plaza",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "No",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "This workshop provides international students assistance with the necessary internship eligibility paperwork. It explains how students can get involved on and off campus and how to get \"market ready\" to do internships, as well as discuss things to look out for in the internship search process. Please register on Handshake.",
    "EnableTag": 1,
    "SubmitionDateTime": "16:23.7",
    "": ""
  },
  {
    "Event_id": 19,
    "Sponsored_by": "Hospitality and Tourism Association (HATA)",
    "Headline": "The Chef Agency",
    "Subheader": "Recruiting Services - Meet Professionals",
    "AnnouncementFor": "Both",
    "Email": "eg27385n@pace.edu",
    "Start_Month": 10,
    "Start_Day": 26,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 10,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 10,
    "End_Time_AMPM": "p.m.",
    "Room": "W624",
    "Building": "",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "Meal",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "Chef Agency is the ultimate source of hospitality talent. Chef Agency assists hotel and food and beverage operators across the globe in identifying and selecting acclaimed executive, mid-level chefs and talented upper level executives in order to create leading operations for trusted and valued employees.",
    "EnableTag": "",
    "SubmitionDateTime": "",
    "": ""
  },
  {
    "Event_id": 20,
    "Sponsored_by": "Hospitality and Tourism Association (HATA)",
    "Headline": "Union Square Hospitality Group",
    "Subheader": "Internship Opportunity/ Interview Skills",
    "AnnouncementFor": "Both",
    "Email": "eg27385n@pace.edu",
    "Start_Month": 11,
    "Start_Day": 9,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 10,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 10,
    "End_Time_AMPM": "p.m.",
    "Room": "W602",
    "Building": "",
    "Campus": "New York City",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "Meal",
    "Attachment_Link": "",
    "RSVP_Link": "https://orgsync.com/14671/events/1652600/occurrences/3874690",
    "Message": "Union Square Hospitality Group (USHG) was founded by Danny Meyer and includes some of New York City's most beloved restaurants: Union Square Cafe, Gramercy Tavern, Blue Smoke, Jazz Standard, Shake Shack, The Modern, Cafe 2 and Terrace 5 (located at the Museum of Modern Art), Maialino, Untitled and Studio Cafe (located at the Whitney Museum of American Art), North End Grill, Marta and Porchlight. The company also includes Union Square Events, a catering, sports, and events business, and Hospitality Quotient, a learning business empowering companies to transform their business through the power of hospitality.",
    "EnableTag": "",
    "SubmitionDateTime": "",
    "": ""
  },
  {
    "Event_id": 21,
    "Sponsored_by": "Lubin Business Situations",
    "Headline": "Business Situation",
    "Subheader": "Learn the Do's and Dont's of Business",
    "AnnouncementFor": "Both",
    "Email": "Ms17746p@pace.edu",
    "Start_Month": 11,
    "Start_Day": 16,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 10,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 0,
    "End_Time_AMPM": "p.m.",
    "Room": "Butcher Suite",
    "Building": "Kessel Student Center",
    "Campus": "Pleasantville",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "Meal",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "Learn what to wear, how to act, and what to do, in the various situations you may encounter in your professional career.",
    "EnableTag": 1,
    "SubmitionDateTime": "51:34.7",
    "": ""
  },
  {
    "Event_id": 22,
    "Sponsored_by": "Lubin Business Situations",
    "Headline": "Business Situation",
    "Subheader": "Learn the Do's and Dont's of Business",
    "AnnouncementFor": "Both",
    "Email": "Ms17746p@pace.edu",
    "Start_Month": 11,
    "Start_Day": 16,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 10,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 0,
    "End_Time_AMPM": "p.m.",
    "Room": "Butcher Suite",
    "Building": "Kessel Student Center",
    "Campus": "Pleasantville",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "Meal",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "Learn what to wear, how to act, and what to do, in the various situations you may encounter in your professional career.",
    "EnableTag": 1,
    "SubmitionDateTime": "52:29.4",
    "": ""
  },
  {
    "Event_id": 23,
    "Sponsored_by": "Lubin Business Association",
    "Headline": "Entrepreneurship Panel",
    "Subheader": "Take your idea to the next level!",
    "AnnouncementFor": "Both",
    "Email": "Ms17746p@pace.edu",
    "Start_Month": 11,
    "Start_Day": 30,
    "Start_Year": 2016,
    "Start_TimeHr": 12,
    "Start_TimeMin": 10,
    "Start_TimeAMPM": "p.m.",
    "End_Time_Hr": 1,
    "End_Time_Min": 10,
    "End_Time_AMPM": "p.m.",
    "Room": "Miller 39",
    "Building": "Miller",
    "Campus": "Pleasantville",
    "Off_Campus_Address": "",
    "Attire": "Any",
    "Food_Provided": "Meal",
    "Attachment_Link": "",
    "RSVP_Link": "",
    "Message": "Learn what it takes to take a business from idea to reality, from real entrepreneurs with real businesses!",
    "EnableTag": 1,
    "SubmitionDateTime": "01:51.0",
    "": ""
  }
]

    console.log("Hello1");
    console.log($resource.sessionId);
    console.log("Hello2");

        return {
            getSomeData: function(id){
                return session_own[id];
            }
        }

})
.factory('Events', function($q) {

    var incrementDate = function (date, amount) {
            var tmpDate = new Date(date);
            tmpDate.setDate(tmpDate.getDate() + amount)
            return tmpDate;
    };

    //create fake events, but make it dynamic so they are in the next week
    var fakeEvents = [];
    fakeEvents.push(
        {
            "title":"Meetup on Ionic",
            "description":"We'll talk about beer, not Ionic.",
            "date":incrementDate(new Date(), 1)
        }   
    );
    fakeEvents.push(
        {
            "title":"Meetup on Beer",
            "description":"We'll talk about Ionic, not Beer.",
            "date":incrementDate(new Date(), 2)
        }   
    );
    fakeEvents.push(
        {
            "title":"Ray's Birthday Bash",
            "description":"Celebrate the awesomeness of Ray",
            "date":incrementDate(new Date(), 4)
        }   
    );
    fakeEvents.push(
        {
            "title":"Code Review",
            "description":"Let's tear apart Ray's code.",
            "date":incrementDate(new Date(), 5)
        }   
    );
    
    var getEvents = function() {
            var deferred = $q.defer();
            deferred.resolve(fakeEvents);
            return deferred.promise;
    }
    
  return {
        get:getEvents
  };

});