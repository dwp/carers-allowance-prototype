//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/35-hours-past-date', function(request, response) {

    var hoursOfCare = request.session.data['35HoursOfCare']
    if (hoursOfCare == "yes"){
        response.redirect("/layouts/apply/short-journeys/35-hours-yes")
    } else {
        response.redirect("/layouts/apply/short-journeys/35-hours-deflection")
    }
}),



//education redesign iteration 1

router.post('/layouts/apply/long-journeys/education/education-past-date', function(request, response) {

    var education = request.session.data['inEducation']
    if (education == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-still")
    } else {
        response.redirect("/layouts/apply/long-journeys/education/employment-no-education")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-still', function(request, response) {

    var education = request.session.data['inEducationStill']
    if (education == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-still-yes")
    } else {
        response.redirect("/layouts/apply/long-journeys/education/education-still-no")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-still-yes', function(request, response) {

    var educationWhere = request.session.data['inEducationWhere']
    if (educationWhere == "school"){
        response.redirect("/layouts/apply/long-journeys/education/education-deflection-school")
    } 
    else if (educationWhere == "university"){
        response.redirect("/layouts/apply/long-journeys/education/education-uni")
    }
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-21-hours")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-today-still-yes', function(request, response) {

    var educationWhere = request.session.data['inEducationWhere']
    if (educationWhere == "school"){
        response.redirect("/layouts/apply/long-journeys/education/education-deflection-school")
    } 
    else if (educationWhere == "university"){
        response.redirect("/layouts/apply/long-journeys/education/education-today-uni")
    }
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-today-21-hours")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-uni', function(request, response) {

    var educationUni = request.session.data['universityFullTime']
    if (educationUni == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-uni-fulltime-exempt")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-form-info")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-future-uni', function(request, response) {

    var educationUni = request.session.data['universityFullTime']
    if (educationUni == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-future-uni-fulltime-exempt")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/employment")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-21-hours', function(request, response) {

    var hours = request.session.data['21hours']
    if (hours == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-21-break")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-form-info")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-uni-fulltime-exempt', function(request, response) {

    var uniExempt = request.session.data['universityExemption']
    if (uniExempt == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-form-info")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-deflection-full-time")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-future-uni-fulltime-exempt', function(request, response) {

    var uniExempt = request.session.data['universityExemption']
    if (uniExempt == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/employment")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-deflection-full-time")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-21-break', function(request, response) {

    var collegeBreak = request.session.data['approvedBreak']
    if (collegeBreak == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-form-info")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-deflection-full-time")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-today-uni', function(request, response) {

    var educationUni = request.session.data['universityFullTime']
    if (educationUni == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-today-uni-fulltime-exempt")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/employment")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-today-21-hours', function(request, response) {

    var hours = request.session.data['21hours']
    if (hours == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-today-21-break")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/employment")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-today-uni-fulltime-exempt', function(request, response) {

    var uniExempt = request.session.data['universityExemption']
    if (uniExempt == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/employment")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-deflection-full-time")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-today-21-break', function(request, response) {

    var collegeBreak = request.session.data['approvedBreak']
    if (collegeBreak == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/employment")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-deflection-full-time")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-today-date', function(request, response) {

    var currentEducation = request.session.data['currentEducation']
    if (currentEducation == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-today-still-yes")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/employment-no-education")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-future-date', function(request, response) {

    var futureEducation = request.session.data['inEducationFuture']
    if (futureEducation == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-future-where")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/employment-no-education")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-future-where', function(request, response) {

    var educationFutureWhere = request.session.data['futureEducationWhere']
    if (educationFutureWhere == "school"){
        response.redirect("/layouts/apply/long-journeys/education/education-future-deflection-school")
    } 
    else if (educationFutureWhere == "university"){
        response.redirect("/layouts/apply/long-journeys/education/education-future-uni")
    }
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-future-21-hours")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-future-21-hours', function(request, response) {

    var futureHours = request.session.data['future21hours']
    if (futureHours == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-future-21-break")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/employment")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-future-21-break', function(request, response) {

    var futureBreak = request.session.data['futureApprovedBreak']
    if (futureBreak == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/employment")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-deflection-full-time")
    }
}),







//education iteration 2 

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-past-date', function(request, response) {

    var education = request.session.data['inEducation']
    if (education == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-still")
    } else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/employment-no-education")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-still', function(request, response) {

    var education = request.session.data['inEducationStill']
    if (education == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-still-yes")
    } else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-still-no")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-still-yes', function(request, response) {

    var educationWhere = request.session.data['inEducationWhere']
    if (educationWhere == "school"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-deflection-school")
    } 
    else if (educationWhere == "university"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-uni")
        
    }
    else if (educationWhere == "ou"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/employment")
        
    }
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-21-hours")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-today-still-yes', function(request, response) {

    var educationWhere = request.session.data['inEducationWhere']
    if (educationWhere == "school"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-deflection-school")
    } 
    else if (educationWhere == "university"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-today-uni")
    }
    else if (educationWhere == "ou"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/employment")
        
    }
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-today-21-hours")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-uni', function(request, response) {

    var educationUni = request.session.data['universityFullTime']
    if (educationUni == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-uni-fulltime-exempt")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-future-uni', function(request, response) {

    var educationUni = request.session.data['universityFullTime']
    if (educationUni == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-future-uni-fulltime-exempt")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-21-hours', function(request, response) {

    var hours = request.session.data['21hours']
    if (hours == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-21-break")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-uni-fulltime-exempt', function(request, response) {

    var uniExempt = request.session.data['universityExemption']
    if (uniExempt == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-deflection-full-time")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-future-uni-fulltime-exempt', function(request, response) {

    var uniExempt = request.session.data['universityExemption']
    if (uniExempt == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-deflection-full-time")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-21-break', function(request, response) {

    var collegeBreak = request.session.data['approvedBreak']
    if (collegeBreak == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-deflection-full-time")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-today-uni', function(request, response) {

    var educationUni = request.session.data['universityFullTime']
    if (educationUni == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-today-uni-fulltime-exempt")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-today-21-hours', function(request, response) {

    var hours = request.session.data['21hours']
    if (hours == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-today-21-break")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-today-uni-fulltime-exempt', function(request, response) {

    var uniExempt = request.session.data['universityExemption']
    if (uniExempt == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-deflection-full-time")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-today-21-break', function(request, response) {

    var collegeBreak = request.session.data['approvedBreak']
    if (collegeBreak == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-deflection-full-time")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-today-date', function(request, response) {

    var currentEducation = request.session.data['currentEducation']
    if (currentEducation == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-today-still-yes")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/employment-no-education")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-future-date', function(request, response) {

    var futureEducation = request.session.data['inEducationFuture']
    if (futureEducation == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-future-where")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/employment-no-education")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-future-where', function(request, response) {

    var educationFutureWhere = request.session.data['futureEducationWhere']
    if (educationFutureWhere == "school"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-future-deflection-school")
    } 
    else if (educationFutureWhere == "university"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-future-uni")
    }
    else if (educationFutureWhere == "ou"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/employment")
        
    }
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-future-21-hours")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-future-21-hours', function(request, response) {

    var futureHours = request.session.data['future21hours']
    if (futureHours == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-future-21-break")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    }
}),

router.post('/layouts/apply/long-journeys/education/education-iteration-2/education-future-21-break', function(request, response) {

    var futureBreak = request.session.data['futureApprovedBreak']
    if (futureBreak == "yes"){
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-form-info")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/education/education-iteration-2/education-deflection-full-time")
    }
}),










//start of claim redesign

router.post('/layouts/apply/long-journeys/start-of-claim/start-are-you-carer', function(request, response) {

    var isCarer = request.session.data['areYouCarer']
    if (isCarer == "yes"){
        response.redirect("/layouts/apply/long-journeys/start-of-claim/start-where")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/start-of-claim/start-where")
    }
}),

router.post('/layouts/apply/long-journeys/start-of-claim/start-where', function(request, response) {

    var startWhere = request.session.data['whichCountry']
    if (startWhere == "scotland"){
        response.redirect("/layouts/apply/long-journeys/start-of-claim/start-deflection-scotland")
    } 
    else if (startWhere == "northernIreland"){
        response.redirect("/layouts/apply/long-journeys/start-of-claim/start-deflection-ni")
    }
    else if (startWhere == "anotherCountry"){
        response.redirect("/layouts/apply/long-journeys/start-of-claim/start-deflection-other-country")
    }
    else {
        response.redirect("/layouts/apply/long-journeys/start-of-claim/start-carer-dob")
    }
}),

router.post('/layouts/apply/long-journeys/start-of-claim/start-qualifying-benefit', function(request, response) {

    var qualBen = request.session.data['benefits']
    if (qualBen == "none"){
        response.redirect("/layouts/apply/long-journeys/start-of-claim/start-deflection-qb")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/start-of-claim/start-claim-date")
    }
}),

router.post('/layouts/apply/long-journeys/start-of-claim/startni-are-you-carer', function(request, response) {

    var isNiCarer = request.session.data['areYouCarerNI']
    if (isNiCarer == "yes"){
        response.redirect("/layouts/apply/long-journeys/start-of-claim/startni-where")
    } 
    else {
        response.redirect("/layouts/apply/long-journeys/start-of-claim/startni-where")
    }
}),

router.post('/layouts/apply/long-journeys/start-of-claim/startni-where', function(request, response) {

    var startNiWhere = request.session.data['whichCountryNi']
    if (startNiWhere == "scotland"){
        response.redirect("/layouts/apply/long-journeys/start-of-claim/start-deflection-scotland")
    } 
    else if (startNiWhere == "northernIreland"){
        response.redirect("/layouts/apply/long-journeys/start-of-claim/startni-carer-dob")
    }
    else if (startNiWhere == "anotherCountry"){
        response.redirect("/layouts/apply/long-journeys/start-of-claim/start-deflection-other-country")
    }
    else {
        response.redirect("/layouts/apply/long-journeys/start-of-claim/startni-deflection-engwal")
    }
})




// EZRAS ROUTES

// ROUTING FOR EMPLOYEE-CHECK PAGE
// Run this code when a form is submitted to 'employee-check-answer'
router.post('/employee-check-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var employeeCheck = req.session.data['employee-check']

  // Check whether the variable matches a condition
  if (employeeCheck == "yes"){
    // Send user to next page
    res.redirect('/employment-and-income/employer-details')
  } else {
    // Send user to ineligible page
    res.redirect('/employment-and-income/self-employed')
  }

})
// END ROUTING FOR EMPLOYEE-CHECK PAGE


// ROUTING FOR RELATIONSHIPS CONCEPT

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/asking-questions-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var relationshipTier1 = req.session.data['relationship-tier-1']

  // Check whether the variable matches a condition
  if (relationshipTier1 == "child"){
    // Send user to next page
    res.redirect('/relationships/asking-questions-child')
  } else if (relationshipTier1 == "sibling"){
    // Send user to ineligible page
    res.redirect('/relationships/asking-questions-sibling')
  } else {
    // Send user to ineligible page
    res.redirect('/relationships/ineligible')
  }

})

// END ROUTING FOR RELATIONSHIPS CONCEPT

// END EZRAS ROUTES