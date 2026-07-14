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





// EMPLOYMENT & INCOME WITH EXPESNSES ROUTES

// MORE THAN ONE INCOME
router.post('/more-than-one-income-answer', function(request, response) {

	var moreThanOneIncome = request.session.data['doYouReceiveMoreThanOneIncome']
	if (moreThanOneIncome == "No"){
		response.redirect("/employment-and-income-with-expenses/what-is-source-of-income")
	} else {
		response.redirect("/employment-and-income-with-expenses/add-income-1")
	}
})
// END MORE THAN ONE INCOME

// SOURCE OF INCOME INCOME
router.post('/source-of-income-answer', function(request, response) {

	var sourceOfIncome = request.session.data['sourceOfIncome']
	if (sourceOfIncome == "Employment"){
		response.redirect("/employment-and-income-with-expenses/do-you-receive-these")
	} else if (sourceOfIncome == "Self-employment"){
        response.redirect("/employment-and-income-with-expenses/self-employment")
    } else if (sourceOfIncome == "Rental property"){
        response.redirect("/employment-and-income-with-expenses/how-often-paid")
    } else if (sourceOfIncome == "Caring for people"){
        response.redirect("/employment-and-income-with-expenses/how-often-paid")
    } else if (sourceOfIncome == "Fostering allowance"){
        response.redirect("/employment-and-income-with-expenses/paid-by-fostering-agency-or-local-authority")
    } else if (sourceOfIncome == "Cash in hand"){
        response.redirect("/employment-and-income-with-expenses/how-often-paid")
    } else {
		response.redirect("/employment-and-income-with-expenses/add-income-1")
	}
})
// END SOURCE OF INCOME INCOME

// HOW OFTEN PAID
router.post('/how-often-paid-answer', function(request, response) {

	var howOftenPaid = request.session.data['howOftenPaid']
	if (howOftenPaid == "weekly"){
		response.redirect("/employment-and-income-with-expenses/threshold-weekly")
	} else if (howOftenPaid == "Fortnightly"){
        response.redirect("/employment-and-income-with-expenses/threshold-fortnightly")
    } else if (howOftenPaid == "4 weekly"){
        response.redirect("/employment-and-income-with-expenses/threshold-4-weekly")
    } else if (howOftenPaid == "Monthly"){
        response.redirect("/employment-and-income-with-expenses/threshold-monthly")
    } else if (howOftenPaid == "One off payments"){
        response.redirect("/employment-and-income-with-expenses/threshold-one-off-payments")
    } else {
		response.redirect("/employment-and-income-with-expenses/404")
	}
})
// END HOW OFTEN PAID

// THRESHOLD WEEKLY
router.post('/threshold-weekly-answer', function(request, response) {

	var thresholdWeekly = request.session.data['thresholdWeekly']
	if (thresholdWeekly == "Yes"){
		response.redirect("/employment-and-income-with-expenses/care-costs")
	} else {
		response.redirect("/employment-and-income-with-expenses/you-may-be-allowed-carers-allowance")
	}
})
// END THRESHOLD WEEKLY

// THRESHOLD FORTNIGHTLY
router.post('/threshold-fortnightly-answer', function(request, response) {

	var thresholdFortnightly = request.session.data['thresholdFortnightly']
	if (thresholdFortnightly == "Yes"){
		response.redirect("/employment-and-income-with-expenses/care-costs")
	} else {
		response.redirect("/employment-and-income-with-expenses/you-may-be-allowed-carers-allowance")
	}
})
// END THRESHOLD FORTNIGHTLY

// THRESHOLD 4 WEEKLY
router.post('/threshold-4-weekly-answer', function(request, response) {

	var threshold4Weekly = request.session.data['threshold4Weekly']
	if (threshold4Weekly == "Yes"){
		response.redirect("/employment-and-income-with-expenses/care-costs")
	} else {
		response.redirect("/employment-and-income-with-expenses/you-may-be-allowed-carers-allowance")
	}
})
// END THRESHOLD 4 WEEKLY

// THRESHOLD MONTHLY
router.post('/threshold-monthly-answer', function(request, response) {

	var thresholdMonthly = request.session.data['thresholdMonthly']
	if (thresholdMonthly == "Yes"){
		response.redirect("/employment-and-income-with-expenses/care-costs")
	} else {
		response.redirect("/employment-and-income-with-expenses/you-may-be-allowed-carers-allowance")
	}
})
// END THRESHOLD MONTHLY

// THRESHOLD ONE OFF PAYMENTS
router.post('/threshold-one-off-payments-answer', function(request, response) {

	var thresholdOneOffPayments = request.session.data['thresholdOneOffPayments']
	if (thresholdOneOffPayments == "Yes"){
		response.redirect("/employment-and-income-with-expenses/care-costs")
	} else {
		response.redirect("/employment-and-income-with-expenses/you-may-be-allowed-carers-allowance")
	}
})
// END THRESHOLD ONE OFF PAYMENTS

// DOES YOUR PREVIOUS EMPLOYER OWE YOU ANY MONEY
router.post('/previous-employer-owe-money-answer', function(request, response) {

	var previousEmployerOweMoney = request.session.data['previousEmployerOweMoney']
	if (previousEmployerOweMoney == "Yes"){
		response.redirect("/employment-and-income-with-expenses/how-much-do-you-expect-to-receive")
	} else {
		response.redirect("/employment-and-income-with-expenses/care-costs")
	}
})
// END DOES YOUR PREVIOUS EMPLOYER OWE YOU ANY MONEY

// ADD INCOME SOURCE 1
router.post('/add-income-1-answer', function(request, response) {

	var sourceOfIncome1 = request.session.data['sourceOfIncome1']
	if (sourceOfIncome1 == "Employment"){
		response.redirect("/employment-and-income-with-expenses/name-of-employer")
	} else {
		response.redirect("/employment-and-income-with-expenses/care-costs")
	}
})
// END ADD INCOME SOURCE 1

// THRESHOLD WEEKLY 2
router.post('/threshold-weekly-2-answer', function(request, response) {

	var thresholdWeekly2 = request.session.data['thresholdWeekly2']
	if (thresholdWeekly2 == "Yes"){
		response.redirect("/employment-and-income-with-expenses/income-summary")
	} else {
		response.redirect("/employment-and-income-with-expenses/you-may-be-allowed-carers-allowance")
	}
})
// END THRESHOLD WEEKLY 2

// ADD INCOME SOURCE 2
router.post('/add-income-2-answer', function(request, response) {

	var sourceOfIncome2 = request.session.data['sourceOfIncome2']
	if (sourceOfIncome2 == "Self-employment"){
		response.redirect("/employment-and-income-with-expenses/type-of-business")
	} else {
		response.redirect("/employment-and-income-with-expenses/care-costs")
	}
})
// END ADD INCOME SOURCE 2

// THRESHOLD WEEKLY 2
router.post('/threshold-weekly-3-answer', function(request, response) {

	var thresholdWeekly3 = request.session.data['thresholdWeekly3']
	if (thresholdWeekly3 == "Yes"){
		response.redirect("/employment-and-income-with-expenses/do-you-have-accounts")
	} else {
		response.redirect("/employment-and-income-with-expenses/add-expense-1")
	}
})
// END THRESHOLD WEEKLY 2

// DO YOU HAVE ACCOUNTS
router.post('/do-you-have-accounts-answer', function(request, response) {

	var doYouHaveAccounts = request.session.data['doYouHaveAccounts']
	if (doYouHaveAccounts == "Yes"){
		response.redirect("/employment-and-income-with-expenses/send-accounts")
	} else {
		response.redirect("/employment-and-income-with-expenses/do-you-know-trading-year-start-date")
	}
})
// END DO YOU HAVE ACCOUNTS

// DO YOU KNOW TRADING YEAR START DATE
router.post('/do-you-know-trading-year-answer', function(request, response) {

	var doYouKnowTradingYear = request.session.data['doYouKnowTradingYear']
	if (doYouKnowTradingYear == "Yes"){
		response.redirect("/employment-and-income-2/when-did-you-start-trading")
	} else {
		response.redirect("/employment-and-income-2/we-need-more-information")
	}
})
// END DO YOU KNOW TRADING YEAR START DATE

// TAKE OFF YOUR EXPENSES
router.post('/take-off-your-expenses-answer', function(request, response) {

	var takeOffYourExpenses = request.session.data['takeOffYourExpenses']
	if (takeOffYourExpenses == "Yes"){
		response.redirect("/employment-and-income-with-expenses/add-expense-1")
	} else {
		response.redirect("/employment-and-income-with-expenses/not-eligible")
	}
})
// END TAKE OFF YOUR EXPENSES

// TAKE ADD EXPENSE 1
router.post('/add-expense-1-answer', function(request, response) {

	var addExpense1 = request.session.data['addExpense1']
	if (addExpense1 == "Car insurance"){
		response.redirect("/employment-and-income-with-expenses/expense-car-insurance")
	} else if (addExpense1 == "Car lease"){
        response.redirect("/employment-and-income-with-expenses/expense-car-lease")
    } else if (addExpense1 == "Car maintenance"){
        response.redirect("/employment-and-income-with-expenses/expense-car-maintenance")
    } else if (addExpense1 == "Equipment"){
        response.redirect("/employment-and-income-with-expenses/expense-equipment")
    } else if (addExpense1 == "Food"){
        response.redirect("/employment-and-income-with-expenses/expense-food")
    } else if (addExpense1 == "Fuel"){
        response.redirect("/employment-and-income-with-expenses/expense-fuel")
    } else if (addExpense1 == "House bills"){
        response.redirect("/employment-and-income-with-expenses/expense-house-bills")
    } else if (addExpense1 == "Laundry"){
        response.redirect("/employment-and-income-with-expenses/expense-laundry")
    } else if (addExpense1 == "Parking costs"){
        response.redirect("/employment-and-income-with-expenses/expense-parking-costs")
    } else if (addExpense1 == "Transportation costs"){
        response.redirect("/employment-and-income-with-expenses/expense-transportation-costs")
    } else if (addExpense1 == "Uniform"){
        response.redirect("/employment-and-income-with-expenses/expense-uniform")
    } else if (addExpense1 == "Something else"){
        response.redirect("/employment-and-income-with-expenses/expense-something-else")
    } else {
		response.redirect("/employment-and-income-with-expenses/add-income-1")
	}
})
// END TAKE ADD EXPENSE 1

// ADD EXPENSE 2
router.post('/add-expense-2-answer', function(request, response) {

	var addExpense1 = request.session.data['addExpense2']
	if (addExpense1 == "Car insurance"){
		response.redirect("/employment-and-income-with-expenses/expense-car-insurance")
	} else if (addExpense1 == "Car lease"){
        response.redirect("/employment-and-income-with-expenses/expense-car-lease")
    } else if (addExpense1 == "Car maintenance"){
        response.redirect("/employment-and-income-with-expenses/expense-car-maintenance")
    } else if (addExpense1 == "Equipment"){
        response.redirect("/employment-and-income-with-expenses/expense-equipment")
    } else if (addExpense1 == "Food"){
        response.redirect("/employment-and-income-with-expenses/expense-food")
    } else if (addExpense1 == "Fuel"){
        response.redirect("/employment-and-income-with-expenses/expense-fuel")
    } else if (addExpense1 == "House bills"){
        response.redirect("/employment-and-income-with-expenses/expense-house-bills")
    } else if (addExpense1 == "Laundry"){
        response.redirect("/employment-and-income-with-expenses/expense-laundry")
    } else if (addExpense1 == "Parking costs"){
        response.redirect("/employment-and-income-with-expenses/expense-parking-costs")
    } else if (addExpense1 == "Transportation costs"){
        response.redirect("/employment-and-income-with-expenses/expense-transportation-costs")
    } else if (addExpense1 == "Uniform"){
        response.redirect("/employment-and-income-with-expenses/expense-uniform")
    } else if (addExpense1 == "Something else"){
        response.redirect("/employment-and-income-with-expenses/expense-something-else")
    } else {
		response.redirect("/employment-and-income-with-expenses/add-income-1")
	}
})
// END ADD EXPENSE 2

// END EMPLOYMENT & INCOME WITH EXPESNSES ROUTES








// EMPLOYMENT & INCOME 2

// SOURCE OF INCOME INCOME
router.post('/main-source-of-income-answer', function(request, response) {

	var mainSourceOfIncome = request.session.data['mainSourceOfIncome']
	if (mainSourceOfIncome == "Employment"){
		response.redirect("/employment-and-income-2/threshold")
	} else if (mainSourceOfIncome == "Self-employment"){
        response.redirect("/employment-and-income-2/type-of-business")
    } else if (mainSourceOfIncome == "Get paid cash"){
        response.redirect("/employment-and-income-2/we-need-more-information-earnings")
    } else if (mainSourceOfIncome == "Direct payments"){
        response.redirect("/employment-and-income-2/we-need-more-information-earnings")
    } else if (mainSourceOfIncome == "Fostering allowance"){
        response.redirect("/employment-and-income-2/paid-by-fostering-agency-or-local-authority")
    } else if (mainSourceOfIncome == "Rental property"){
        response.redirect("/employment-and-income-2/we-need-more-information-earnings")
    } else {
		response.redirect("/employment-and-income-2/previous-job-onboarding")
	}
})
// END SOURCE OF INCOME INCOME

// ABOVE OR BELOW THRESHOLD ANSWER
router.post('/above-below-threshold-answer', function(request, response) {

	var moreThanOneIncome = request.session.data['moreThanOneIncome']

	if (moreThanOneIncome == "Yes") {
		response.redirect("/employment-and-income-2/name-of-employer")
	} else {
		response.redirect("/employment-and-income-2/do-you-receive-these")
	}

})
// END ABOVE OR BELOW THRESHOLD ANSWER

// EXPECT TO EARN LESS THAN £196?
router.post('/threshold-answer', function(request, response) {

	var thresholdAnswer = request.session.data['thresholdAnswer']
    var doYouReceiveThesePayments = request.session.data['doYouReceiveThesePayments']

	if (doYouReceiveThesePayments == "Statutory Maternity, Paternity or Adoption Pay") {
		response.redirect("/employment-and-income-2/income-summary")
	} else if (doYouReceiveThesePayments == "Statutory sick pay") {
		response.redirect("/employment-and-income-2/income-summary")
	} else if (thresholdAnswer == "No") {
		response.redirect("/employment-and-income-2/not-eligible")
	} else if (thresholdAnswer == "Not always") {
		response.redirect("/employment-and-income-2/not-eligible")
	} else if (thresholdAnswer == "Not sure") {
		response.redirect("/employment-and-income-2/not-eligible")
	} else if (thresholdAnswer == "Yes") {
		response.redirect("/employment-and-income-2/expenses-onboarding")
	}

})
// END EXPECT TO EARN LESS THAN £196?

// DO YOU PAY FOR THINGS TO DO YOUR JOB?
router.post('/do-you-pay-for-expenses-answer', function(request, response) {

	var doYouPayForExpenses = request.session.data['doYouPayForExpenses']

	if (doYouPayForExpenses == "Yes") {
		response.redirect("/employment-and-income-2/add-expense-1")
	} else if (doYouPayForExpenses == "No") {
		response.redirect("/employment-and-income-2/income-summary")
	}

})
// END DO YOU PAY FOR THINGS TO DO YOUR JOB?

// STATUTORY ANSWER
router.post('/statutory-answer', function(request, response) {

	var doYouReceiveThesePayments = request.session.data['doYouReceiveThesePayments']
    var moreThanOneIncome = request.session.data['moreThanOneIncome']
    var thresholdAnswer = request.session.data['thresholdAnswer']

	if (doYouReceiveThesePayments == "Statutory sick pay") {
		response.redirect("/employment-and-income-2/we-need-more-info_sick-pay")
	} else if (doYouReceiveThesePayments == "Statutory Maternity, Paternity or Adoption Pay") {
		response.redirect("/employment-and-income-2/we-need-more-info_maternity-paternity-adoption")
	} else if (doYouReceiveThesePayments == "None of these" && thresholdAnswer == "No" && moreThanOneIncome == "Yes") {
		response.redirect("/employment-and-income-2/expenses-may-be-eligible")
	} else if (doYouReceiveThesePayments == "None of these" && thresholdAnswer == "Yes" && moreThanOneIncome == "No") {
		response.redirect("/employment-and-income-2/do-you-have-expenses_one-income")
	} else if (doYouReceiveThesePayments == "None of these" && thresholdAnswer == "No" && moreThanOneIncome == "No") {
		response.redirect("/employment-and-income-2/expenses-may-be-eligible")
	} else {
		response.redirect("/employment-and-income-2/do-you-have-expenses_more-than-one-income")
	}

})
// END STATUTORY ANSWER

// EXPENSES MAY BE ELIGIBLE
router.post('/expenses-may-be-eligible-answer', function(request, response) {

    var moreThanOneIncome = request.session.data['moreThanOneIncome']

	if (moreThanOneIncome == "Yes") {
		response.redirect("/employment-and-income-2/do-you-have-expenses_more-than-one-income")
	} else {
		response.redirect("/employment-and-income-2/do-you-have-expenses_one-income")
	}

})
// END EXPENSES MAY BE ELIGIBLE

// DO YOU HAVE EXPENSES?
router.post('/do-you-have-expenses-answer', function(request, response) {

    var doYouHaveExpenses = request.session.data['doYouHaveExpenses']

	if (doYouHaveExpenses == "Yes") {
		response.redirect("/employment-and-income-2/work-expenses")
	} else {
		response.redirect("/employment-and-income-2/income-summary")
	}

})
// END DO YOU HAVE EXPENSES?

// DO YOU HAVE EXPENSES?
router.post('/work-expenses-answer', function(request, response) {

    var moreThanOneIncome = request.session.data['moreThanOneIncome']

	if (moreThanOneIncome == "Yes") {
		response.redirect("/employment-and-income-2/income-summary-more-than-one-income")
	} else {
		response.redirect("/employment-and-income-2/income-summary-one-income")
	}

})
// END DO YOU HAVE EXPENSES?

// ADD EXPENSE 1
router.post('/add-an-expense-1-answer', function(request, response) {

	var addExpense1 = request.session.data['addExpense1']
	if (addExpense1 == "Equipment"){
		response.redirect("/employment-and-income-2/expense-equipment-onboarding")
	} else if (addExpense1 == "Fuel"){
        response.redirect("/employment-and-income-2/expense-fuel-onboarding")
    } else if (addExpense1 == "Household bills"){
        response.redirect("/employment-and-income-2/expense-household-bills-onboarding")
    } else if (addExpense1 == "Laundry"){
        response.redirect("/employment-and-income-2/expense-laundry-onboarding")
    } else if (addExpense1 == "Parking costs"){
        response.redirect("/employment-and-income-2/expense-parking-costs-onboarding")
    } else if (addExpense1 == "Travel"){
        response.redirect("/employment-and-income-2/expense-travel-onboarding")
    } else if (addExpense1 == "Accomodation"){
        response.redirect("/employment-and-income-2/expense-accomodation-onboarding")
    } else if (addExpense1 == "Uniform"){
        response.redirect("/employment-and-income-2/expense-uniform-onboarding")
    } else if (addExpense1 == "Something else"){
        response.redirect("/employment-and-income-2/expense-something-else")
    }
})
// END ADD EXPENSE 1

// ADD INCOME 2
router.post('/add-an-income-2-answer', function(request, response) {

	var sourceOfIncome1 = request.session.data['sourceOfIncome1']

	if (sourceOfIncome1 == "Employment"){
		response.redirect("/employment-and-income-2/name-of-employer")
	} else if (sourceOfIncome1 == "Self-employment"){
        response.redirect("/employment-and-income-2/type-of-business")
    } else if (sourceOfIncome1 == "Cash in hand"){
        response.redirect("/employment-and-income-2/we-need-more-information-earnings")
    } else if (sourceOfIncome1 == "Direct payments"){
        response.redirect("/employment-and-income-2/we-need-more-information-earnings")
    } else if (sourceOfIncome1 == "Fostering allowance"){
        response.redirect("/employment-and-income-2/paid-by-fostering-agency-or-local-authority")
    } else if (sourceOfIncome1 == "Rental property"){
        response.redirect("/employment-and-income-2/we-need-more-information-earnings")
    } else {
		response.redirect("/employment-and-income-2/previous-job-onboarding")
	}
})
// END ADD INCOME 2

// DO YOU HAVE ACCOUNTS
router.post('/have-accounts-answer', function(request, response) {

	var doYouHaveAccounts = request.session.data['doYouHaveAccounts']

	if (doYouHaveAccounts == "Yes"){
		response.redirect("/employment-and-income-2/send-accounts")
	} else {
		response.redirect("/employment-and-income-2/do-you-know-trading-year-start-date")
	}
})
// END DO YOU HAVE ACCOUNTS

// EARN LESS THAN 7852
router.post('/earn-less-than-7852-answer', function(request, response) {

	var earnLessThan7852 = request.session.data['earnLessThan7852']

	if (earnLessThan7852 == "Yes"){
		response.redirect("/employment-and-income-2/income-summary-2")
	} else {
		response.redirect("/employment-and-income-2/not-eligible-2")
	}
})
// END EARN LESS THAN 7852

// PAID BY FOSTERING AGENCY OR LOCAL AUTHORITY
router.post('/fostering-answer', function(request, response) {

	var fosteringAgencyOrLocalAuthority = request.session.data['fosteringAgencyOrLocalAuthority']

	if (fosteringAgencyOrLocalAuthority == "Fostering agency"){
		response.redirect("/employment-and-income-2/name-of-fostering-agency")
	} else {
		response.redirect("/employment-and-income-2/income-summary")
	}
})
// END PAID BY FOSTERING AGENCY OR LOCAL AUTHORITY

// PAID BY FOSTERING AGENCY OR LOCAL AUTHORITY
router.post('/check-details-cash-payments-rental-answer', function(request, response) {

	var mainSourceOfIncome = request.session.data['mainSourceOfIncome']
    var moreThanOneIncome = request.session.data['moreThanOneIncome']

	if (mainSourceOfIncome == "Get paid cash" && moreThanOneIncome == "No"){
		response.redirect("/employment-and-income-2/do-you-have-expenses_one-income")
	} else if (mainSourceOfIncome == "Get paid cash" && moreThanOneIncome == "Yes") {
		response.redirect("/employment-and-income-2/do-you-have-expenses_more-than-one-income")
	} else {
		response.redirect("/employment-and-income-2/private-pensions")
	}
})
// END PAID BY FOSTERING AGENCY OR LOCAL AUTHORITY

// PAID BY FOSTERING AGENCY OR LOCAL AUTHORITY
router.post('/check-details-answer', function(request, response) {

	var careForChildOrAdult = request.session.data['careForChildOrAdult']

	if (careForChildOrAdult == "Child"){
		response.redirect("/employment-and-income-2/care-costs")
	} else {
		response.redirect("/employment-and-income-2/care-costs-adult")
	}
})
// END PAID BY FOSTERING AGENCY OR LOCAL AUTHORITY

// DO YOU PAY FOR CARE FOR DP - CHILD
router.post('/care-costs-answer', function(request, response) {

	var careCosts = request.session.data['careCosts']

	if (careCosts == "Yes"){
		response.redirect("/employment-and-income-2/check-can-take-care-costs-off")
	} else {
		response.redirect("/employment-and-income-2/childcare-costs")
	}
})
// END DO YOU PAY FOR CARE FOR DP - CHILD

// DO YOU PAY FOR CARE FOR DP - ADULT
router.post('/care-costs-adult-answer', function(request, response) {

	var careCosts = request.session.data['careCosts']

	if (careCosts == "Yes"){
		response.redirect("/employment-and-income-2/check-can-take-care-costs-off-adult")
	} else {
		response.redirect("/employment-and-income-2/childcare-costs")
	}
})
// END DO YOU PAY FOR CARE FOR DP - ADULT

// CHECK CAN TAKE CARE COSTS OFF
router.post('/check-can-take-care-costs-off-answer', function(request, response) {

	var checkCanTakeCareCostsOff = request.session.data['checkCanTakeCareCostsOff']

	if (checkCanTakeCareCostsOff == "A business"){
		response.redirect("/employment-and-income-2/name-of-business")
	} else {
		response.redirect("/employment-and-income-2/name-of-person")
	}
})
// END CHECK CAN TAKE CARE COSTS OFF

// CHECK CAN TAKE CARE COSTS OFF
router.post('/check-can-take-care-costs-off-adult-answer', function(request, response) {

	var checkCanTakeCareCostsOff = request.session.data['checkCanTakeCareCostsOff']

	if (checkCanTakeCareCostsOff == "A business"){
		response.redirect("/employment-and-income-2/name-of-business-adult")
	} else {
		response.redirect("/employment-and-income-2/name-of-person-adult")
	}
})
// END CHECK CAN TAKE CARE COSTS OFF

// IS PERSON CLOSELY RELATED TO YOU
router.post('/is-person-closely-related-answer', function(request, response) {

	var isPersonCloselyRelatedToYou = request.session.data['isPersonCloselyRelatedToYou']
    var checkCanTakeChildcareCostsOff = request.session.data['checkCanTakeChildcareCostsOff']

	if (isPersonCloselyRelatedToYou == "No" && checkCanTakeChildcareCostsOff == "A person"){
		response.redirect("/employment-and-income-2/tax-free-childcare-child-benefit")
	} else if (isPersonCloselyRelatedToYou == "No"){
		response.redirect("/employment-and-income-2/tax-free-childcare")
	} else {
		response.redirect("/employment-and-income-2/cannot-add-someone-closely-related")
	}
})
// END IS PERSON CLOSELY RELATED TO YOU

// IS PERSON CLOSELY RELATED TO YOU
router.post('/is-person-closely-related-adult-answer', function(request, response) {

	var isPersonCloselyRelatedToYou = request.session.data['isPersonCloselyRelatedToYou']
    var checkCanTakeChildcareCostsOff = request.session.data['checkCanTakeChildcareCostsOff']

	if (isPersonCloselyRelatedToYou == "No" && checkCanTakeChildcareCostsOff == "A person"){
		response.redirect("/employment-and-income-2/how-often-pay-for-care")
	} else if (isPersonCloselyRelatedToYou == "No"){
		response.redirect("/employment-and-income-2/how-often-pay-for-care")
	} else {
		response.redirect("/employment-and-income-2/cannot-add-someone-closely-related-adult")
	}
})
// END IS PERSON CLOSELY RELATED TO YOU

// ANY CHILDREN GET CHILD BENEFIT?
router.post('/any-children-get-child-benefit-answer', function(request, response) {

	var anyChildrenGetChildBenefit = request.session.data['anyChildrenGetChildBenefit']

	if (anyChildrenGetChildBenefit == "Yes"){
		response.redirect("/employment-and-income-2/child-name-child-benefit-number")
	} else {
		response.redirect("/employment-and-income-2/cannot-take-childcare-costs-off-income")
	}
})
// END ANY CHILDREN GET CHILD BENEFIT?

// PAY ANYONE ELSE CARE FOR CHILD?
router.post('/pay-someone-else-care-answer', function(request, response) {

	var paySomeoneElseCare = request.session.data['paySomeoneElseCare']

	if (paySomeoneElseCare == "Yes"){
		response.redirect("/employment-and-income-2/check-can-take-care-costs-off")
	} else {
		response.redirect("/employment-and-income-2/private-pensions")
	}
})
// END PAY ANYONE ELSE CARE FOR CHILD?

// PAY ANYONE ELSE CARE FOR ADULT?
router.post('/pay-someone-else-care-adult-answer', function(request, response) {

	var paySomeoneElseCare = request.session.data['paySomeoneElseCare']

	if (paySomeoneElseCare == "Yes"){
		response.redirect("/employment-and-income-2/check-can-take-care-costs-off-adult")
	} else {
		response.redirect("/employment-and-income-2/private-pensions")
	}
})
// END PAY ANYONE ELSE CARE FOR ADULT?

// CHECK CAN TAKE CHILDCARE COSTS OFF
router.post('/check-can-take-childcare-costs-off-answer', function(request, response) {

	var checkCanTakeChildcareCostsOff = request.session.data['checkCanTakeChildcareCostsOff']

	if (checkCanTakeChildcareCostsOff == "A business"){
		response.redirect("/employment-and-income-2/name-of-business-childcare")
	} else {
		response.redirect("/employment-and-income-2/name-of-person-childcare")
	}
})
// END CHECK CAN TAKE CHILDCARE COSTS OFF

// CHILDCARE COSTS NO INPUT ROUTING
router.post('/childcare-costs-no-input-answer', function(request, response) {

	var careCosts = request.session.data['careCosts']
    var doYouGetChildBenefit = request.session.data['doYouGetChildBenefit']
    var taxFreeChildcare = request.session.data['taxFreeChildcare']

	if (doYouGetChildBenefit == "Yes"){
		response.redirect("/employment-and-income-2/childcare-costs-summary-2")
	} else if (careCosts == "Yes"){
		response.redirect("/employment-and-income-2/childcare-costs-summary")
	}
})
// END CHILDCARE COSTS NO INPUT ROUTING

// DO YOU GET TAX FREE CHILDCARE
router.post('/tax-free-childcare-answer', function(request, response) {

	var taxFreeChildcare = request.session.data['taxFreeChildcare']

	if (taxFreeChildcare == "Yes"){
		response.redirect("/employment-and-income-2/how-often-pay-for-childcare")
	} else {
		response.redirect("/employment-and-income-2/how-often-pay-for-childcare")
	}
})
// END DO YOU GET TAX FREE CHILDCARE

// HOW OFTEN DO YOU PAY FOR CHILDCARE?
router.post('/how-often-pay-childcare-answer', function(request, response) {

	var taxFreeChildcare = request.session.data['taxFreeChildcare']

	if (taxFreeChildcare == "Yes"){
		response.redirect("/employment-and-income-2/check-amount-you-pay-for-childcare")
	} else {
		response.redirect("/employment-and-income-2/total-childcare-costs")
	}
})
// END HOW OFTEN DO YOU PAY FOR CHILDCARE?

// HOW OFTEN DO YOU PAY FOR CHILDCARE?
router.post('/chidlcare-costs-answer', function(request, response) {

	var childcareCosts = request.session.data['childcareCosts']

	if (childcareCosts == "Yes"){
		response.redirect("/employment-and-income-2/child-name")
	} else {
		response.redirect("/employment-and-income-2/private-pensions")
	}
})
// END HOW OFTEN DO YOU PAY FOR CHILDCARE?

// HOW OFTEN DO YOU PAY FOR CHILDCARE?
router.post('/do-you-get-child-benefit-answer', function(request, response) {

	var doYouGetChildBenefit = request.session.data['doYouGetChildBenefit']

	if (doYouGetChildBenefit == "Yes"){
		response.redirect("/employment-and-income-2/child-benefit-number")
	} else {
		response.redirect("/employment-and-income-2/cannot-take-childcare-off")
	}
})
// END HOW OFTEN DO YOU PAY FOR CHILDCARE?

// PAY FOR CHILDCARE FOR OTHER CHILDREN?
router.post('/cannot-take-childcare-off-answer', function(request, response) {

	var childcareOtherChildren = request.session.data['childcareOtherChildren']

	if (childcareOtherChildren == "Yes"){
		response.redirect("/employment-and-income-2/child-name")
	} else {
		response.redirect("/employment-and-income-2/private-pensions")
	}
})
// END PAY FOR CHILDCARE FOR OTHER CHILDREN?

// DO YOU PAY INTO PRIVATE PENSION?
router.post('/do-you-pay-private-pension-answer', function(request, response) {

	var doYouPayIntoPrivatePension = request.session.data['doYouPayIntoPrivatePension']

	if (doYouPayIntoPrivatePension == "Yes"){
		response.redirect("/employment-and-income-2/how-often-pay-private-pension")
	} else {
		response.redirect("/employment-and-income-2/previous-employment")
	}
})
// END DO YOU PAY INTO PRIVATE PENSION?

// WERE YOU PAID BETWEEN THESE DATES?
router.post('/paid-between-dates-answer', function(request, response) {

	var wereYouPaidBetweenDates = request.session.data['wereYouPaidBetweenDates']

	if (wereYouPaidBetweenDates == "Yes"){
		response.redirect("/employment-and-income-2/name-of-employer-2")
	} else {
		response.redirect("/employment-and-income-2/where-to?")
	}
})
// END WERE YOU PAID BETWEEN THESE DATES?

// MORE THAN ONE INCOME
router.post('/do-you-have-more-than-one-source-of-income-answer', function(request, response) {

	var moreThanOneIncome = request.session.data['moreThanOneIncome']

	if (moreThanOneIncome == "I do not receive any income"){
		response.redirect("/employment-and-income-2/previous-employment")
	} else {
        response.redirect("/employment-and-income-2/what-is-source-of-income")
    }
})
// END MORE THAN ONE INCOME

// WERE YOU PAID BY A PREVIOUS EMPLOYER?
router.post('/were-you-paid-by-a-previous-employer-answer', function(request, response) {

	var wereYouPaidByAPreviousEmployer = request.session.data['wereYouPaidByAPreviousEmployer']

	if (wereYouPaidByAPreviousEmployer == "Yes"){
		response.redirect("/employment-and-income-2/name-of-previous-employer")
	} else {
        response.redirect("/employment-and-income-2/previous-self-employment")
    }
})
// END WERE YOU PAID BY A PREVIOUS EMPLOYER?

// WORK EXPENSES PREVIOUS INCOME
router.post('/work-expenses-previous-employment-answer', function(request, response) {

	var workExpensesPreviousEmployment = request.session.data['workExpensesPreviousEmployment']

	if (workExpensesPreviousEmployment == "Yes"){
		response.redirect("/employment-and-income-2/work-expenses-previous-employment")
	} else {
        response.redirect("/employment-and-income-2/income-summary-previous-employment")
    }
})
// END WORK EXPENSES PREVIOUS INCOME

// BEEN SELF EMPLOYED?
router.post('/been-self-employed-answer', function(request, response) {

	var previousSelfEmployment = request.session.data['previousSelfEmployment']

	if (previousSelfEmployment == "Yes"){
		response.redirect("/employment-and-income-2/what-work-did-you-do")
	} else {
        response.redirect("/employment-and-income-2/end-journey")
    }
})
// END BEEN SELF EMPLOYED?

// END EMPLOYMENT & INCOME 2




// END EZRAS ROUTES




// OVERPAYMENT ROUTES

// OVERPAYMENT QUESTION
router.post('/overpayment-answer', function(request, response) {

	var overpayment = request.session.data['askedToRepayCarersAllowanceOverpayment']
	if (overpayment == "No"){
		response.redirect("/overpayments/exit-1")
	} else {
		response.redirect("/overpayments/overpayment-because-of-employed-earnings")
	}
})
// END OVERPAYMENT QUESTION

// OVERPAYMENT BECAUSE OF EARNINGS QUESTION
router.post('/overpayment-because-of-earnings-answer', function(request, response) {

	var overpaymentEarnings = request.session.data['overpaymentBecauseOfEmployedEarnings']
	if (overpaymentEarnings == "No"){
		response.redirect("/overpayments/exit-2")
	} else {
		response.redirect("/overpayments/what-is-your-national-insurance-number")
	}
})
// END OVERPAYMENT BECAUSE OF EARNINGS QUESTION

// WHERE DO YOU LIVE
router.post('/where-do-you-live-answer', function(request, response) {

	var whereDoYouLive = request.session.data['whereDoYouLive']
	if (whereDoYouLive == "United Kingdom"){
		response.redirect("/overpayments/what-is-your-current-address-uk")
	} else {
		response.redirect("/overpayments/what-is-your-current-address-abroad")
	}
})
// END WHERE DO YOU LIVE

// END OVERPAYMENT ROUTES




// NATIONALITY ROUTES

// WHAT IS YOUR NATIONALITY?
router.post('/what-is-your-nationality-answer', function(request, response) {

	var whatIsYourNationality = request.session.data['whatIsYourNationality']
	if (whatIsYourNationality == "British"){
		response.redirect("/nationality-and-relationships/have-you-always-lived-england")
	} else {
		response.redirect("/nationality-and-relationships/enter-nationality")
	}
})
// END WHAT IS YOUR NATIONALITY?

// END NATIONALITY ROUTES




// NATIONALITY ROUTES - FULL JOURNEY

// WHICH COUNTRY DO YOU LIVE IN
router.post('/which-country-do-you-live-in-answer', function(request, response) {

	var whichCountryLiveIn = request.session.data['whichCountryLiveIn']
	if (whichCountryLiveIn == "Another country"){
		response.redirect("/nationality-and-relationships-full-journey/telephone-number-another-country")
	} else {
		response.redirect("/nationality-and-relationships-full-journey/telephone-number")
	}
})
// END WHICH COUNTRY DO YOU LIVE IN

// WHAT IS YOUR NATIONALITY?
router.post('/what-is-your-nationality-full-answer', function(request, response) {

	var whatIsYourNationalityFull = request.session.data['whatIsYourNationalityFull']
	if (whatIsYourNationalityFull == "British"){
		response.redirect("/nationality-and-relationships-full-journey/have-you-always-lived-england")
	} else {
		response.redirect("/nationality-and-relationships-full-journey/enter-nationality")
	}
})
// END WHAT IS YOUR NATIONALITY?

// WHAT IS YOUR NATIONALITY - ANOTHER COUNTRY?
router.post('/what-is-your-nationality-another-country-full-answer', function(request, response) {

	var whatIsYourNationalityAnotherCountryFull = request.session.data['whatIsYourNationalityAnotherCountryFull']
	if (whatIsYourNationalityAnotherCountryFull == "British"){
		response.redirect("/nationality-and-relationships-full-journey/payments-from-abroad")
	} else {
		response.redirect("/nationality-and-relationships-full-journey/enter-nationality-another-country")
	}
})
// END WHAT IS YOUR NATIONALITY? - ANOTHER COUNTRY?

// HAVE YOU ALWAYS LIVED ENGLAND
router.post('/have-you-always-lived-england-answer', function(request, response) {

	var haveYouAlwaysLivedEngland = request.session.data['haveYouAlwaysLivedEngland']
	if (haveYouAlwaysLivedEngland == "yes"){
		response.redirect("/nationality-and-relationships-full-journey/carer-away-from-england-wales")
	} else {
		response.redirect("/nationality-and-relationships-full-journey/carer-arrive-england-wales")
	}
})
// END HAVE YOU ALWAYS LIVED ENGLAND

// WHEN DID YOU ARRIVE ENGLAND WALES
router.post('/carer-arrive-england-wales-answer', function(request, response) {

	var whenDidYouArriveEnglandWales = request.session.data['whenDidYouArriveEnglandWales']
	if (whenDidYouArriveEnglandWales == "Less than 3 years ago"){
		response.redirect("/nationality-and-relationships-full-journey/carer-date-arrive-england-wales")
	} else {
		response.redirect("/nationality-and-relationships-full-journey/carer-away-from-england-wales")
	}
})
// END WHEN DID YOU ARRIVE ENGLAND WALES

// END NATIONALITY ROUTES - FULL JOURNEY





// BREAKS IN CARE

// CARERS NI NUMBER
router.post('/carers-ni-number-answer', function(request, response) {

	var nationalInsuranceNumber = request.session.data['nationalInsuranceNumber']
	if (nationalInsuranceNumber == "AA123456A"){
		response.redirect("/breaks-in-care/jane-doe")
	} else if (nationalInsuranceNumber == "RM000000C") {
		response.redirect("/breaks-in-care/jane")
	} else {
		response.redirect("/breaks-in-care/ni-number-not-found")
	}
})
// END CARERS NI NUMBER

// NI NUMBER NOT FOUND
router.post('/ni-number-not-found-answer', function(request, response) {

	var niNumberNotFound = request.session.data['niNumberNotFound']
	if (niNumberNotFound == "yes"){
		response.redirect("/breaks-in-care/carers-full-name")
	} else {
		response.redirect("/breaks-in-care/carers-ni-number")
	}
})
// END NI NUMBER NOT FOUND

// QUALIFYING BENEFIT
router.post('/qualifying-benefit-answer', function(request, response) {

	var qualifyingBenefit = request.session.data['qualifyingBenefit']
	if (qualifyingBenefit == "Personal Independence Payment"){
		response.redirect("/breaks-in-care/dp-start-receiving-qualifying-benefit")
	} else {
		response.redirect("/breaks-in-care/cant-record-break-for-this-qualifying-benefit")
	}
})
// QUALIFYING BENEFIT

// IS QUALIFYING BENEFIT SUSPENDED?
router.post('/is-qb-suspended-answer', function(request, response) {

	var suspendQB = request.session.data['suspendQB']
    var sourceOfInformation = request.session.data['sourceOfInformation']
	if (suspendQB == "Yes"){
		response.redirect("/breaks-in-care/when-did-suspension-start")
	} else if (sourceOfInformation == "Revision"){
		response.redirect("/breaks-in-care/effective-decision-start-date_revision")
	} else if (sourceOfInformation == "Supersession") {
		response.redirect("/breaks-in-care/consider-decision-from-date_supersession")
	} else {
		response.redirect("/breaks-in-care/check-details")
	}
})
// IS QUALIFYING BENEFIT SUSPENDED?

// WHEN DID SUSPENSION END
router.post('/suspension-end-answer', function(request, response) {

	var sourceOfInformation = request.session.data['sourceOfInformation']
	if (sourceOfInformation == "Revision"){
		response.redirect("/breaks-in-care/effective-decision-start-date_revision")
	} else if (sourceOfInformation == "Supersession"){
        response.redirect("/breaks-in-care/consider-decision-from-date_supersession")
    } else {
		response.redirect("/breaks-in-care/check-details")
	}
})
// END WHEN DID SUSPENSION END

// WHEN DID BREAK START
router.post('/when-did-break-start-answer', function(request, response) {

	var permanentBreak = request.session.data['permanentBreak']
	if (permanentBreak == "No"){
		response.redirect("/breaks-in-care/when-did-break-end_add-new")
	} else {
		response.redirect("/breaks-in-care/is-qualifying-benefit-suspended")
	}
})
// WHEN DID BREAK START

// ADD ANOTHER BREAK
router.post('/add-another-break-answer', function(request, response) {

	var addAnotherBreak = request.session.data['addAnotherBreak']
    var nationalInsuranceNumber = request.session.data['nationalInsuranceNumber']
	if (addAnotherBreak == "No" && nationalInsuranceNumber == "RM111111A"){
		response.redirect("/breaks-in-care/decision_helen")
	} else if (addAnotherBreak == "No" && nationalInsuranceNumber == "RN000000B"){
		response.redirect("/breaks-in-care/decision_lisa")
	} else if (addAnotherBreak == "No" && nationalInsuranceNumber == "RM000000C"){
		response.redirect("/breaks-in-care/decision_jane")
	} else if (addAnotherBreak == "No"){
		response.redirect("/breaks-in-care/decision_no-existing-record")
	} else {
		response.redirect("/breaks-in-care/source-of-information")
	}
})
// ADD ANOTHER BREAK

// ADD ANOTHER BREAK _ ADD NEW
router.post('/add-another-break_add-new-answer', function(request, response) {

	var addAnotherBreakAddNew = request.session.data['addAnotherBreakAddNew']
    var nationalInsuranceNumber = request.session.data['nationalInsuranceNumber']
	if (addAnotherBreakAddNew == "No" && nationalInsuranceNumber == "RM000000C"){
		response.redirect("/breaks-in-care/decision_jane")
	} else if (addAnotherBreakAddNew == "No" && nationalInsuranceNumber == "RN000000B") {
        response.redirect("/breaks-in-care/decision_lisa")
    } else if (addAnotherBreakAddNew == "No") {
		response.redirect("/breaks-in-care/decision_existing-record")
	} else {
		response.redirect("/breaks-in-care/source-of-information_update-break")
	}
})
// ADD ANOTHER BREAK _ ADD NEW

// WHEN DID SUSPENSION END - ADD NEW
router.post('/when-did-suspension-end_add-new-answer', function(request, response) {

    var sourceOfInformationUpdateBreak = request.session.data['sourceOfInformationUpdateBreak']
	if (sourceOfInformationUpdateBreak == "Revision"){
		response.redirect("/breaks-in-care/effective-decision-start-date_revision_add-new")
	} else if (sourceOfInformationUpdateBreak == "Supersession") {
		response.redirect("/breaks-in-care/consider-decision-from-date_supersession_add-new")
	} else {
		response.redirect("/breaks-in-care/check-details_add-new")
	}
})
// WHEN DID SUSPENSION END - ADD NEW

// IS QUALIFYING BENEFIT SUSPENDED - ADD NEW
router.post('/qualifying-benefit-suspended-answer', function(request, response) {

    var isQualifyingBenefitSuspended = request.session.data['isQualifyingBenefitSuspended']
    var sourceOfInformationUpdateBreak = request.session.data['sourceOfInformationUpdateBreak']
	if (isQualifyingBenefitSuspended == "Yes"){
		response.redirect("/breaks-in-care/when-did-suspension-end_add-new")
	} else if(sourceOfInformationUpdateBreak == "Revision") {
		response.redirect("/breaks-in-care/effective-decision-start-date_revision_add-new")
	} else if(sourceOfInformationUpdateBreak == "Supersession") {
		response.redirect("/breaks-in-care/consider-decision-from-date_supersession_add-new")
	} else {
		response.redirect("/breaks-in-care/check-details_add-new")
	}
})
// IS QUALIFYING BENEFIT SUSPENDED - ADD NEW

// EFFECTIVE DECISION START DATE
router.post('/effective-decision-start-date_supersession-answer', function(request, response) {

    var nationalInsuranceNumber = request.session.data['nationalInsuranceNumber']
	if (nationalInsuranceNumber == "RM111111A"){
		response.redirect("/breaks-in-care/effective-decision-start-date_supersession-helen")
	} else if (nationalInsuranceNumber == "RN000000B") {
        response.redirect("/breaks-in-care/effective-decision-start-date_supersession-lisa")
    } else if (nationalInsuranceNumber == "RM000000C") {
        response.redirect("/breaks-in-care/effective-decision-start-date_supersession-jane")
    } else {
        response.redirect("/breaks-in-care/effective-decision-start-date_supersession")
    }
})
// EFFECTIVE DECISION START DATE

// EFFECTIVE DECISION START DATE
router.post('/effective-decision-start-date-supersession-answer', function(request, response) {

    var nationalInsuranceNumber = request.session.data['nationalInsuranceNumber']
	if (nationalInsuranceNumber == "RM111111A"){
		response.redirect("/breaks-in-care/check-details_helen")
	} else if (nationalInsuranceNumber == "RN000000B") {
        response.redirect("/breaks-in-care/check-details_lisa")
    } else if (nationalInsuranceNumber == "RM000000C") {
        response.redirect("/breaks-in-care/check-details_jane")
    } else {
        response.redirect("/breaks-in-care/check-details")
    }
})
// EFFECTIVE DECISION START DATE

// CONSIDER DECISION FROM DATE
router.post('/consider-decision-from-date_revision-answer', function(request, response) {

    var nationalInsuranceNumber = request.session.data['nationalInsuranceNumber']
	if (nationalInsuranceNumber == "RM111111A"){
		response.redirect("/breaks-in-care/check-details_helen")
	} else if (nationalInsuranceNumber == "RN000000B") {
        response.redirect("/breaks-in-care/check-details_lisa")
    } else if (nationalInsuranceNumber == "RM000000C") {
        response.redirect("/breaks-in-care/check-details_jane")
    } else {
        response.redirect("/breaks-in-care/check-details")
    }
})
// CONSIDER DECISION FROM DATE

// DO YOU PAY INTO PRIVATE PENSION?
router.post('/is-qb-suspended-update-answer', function(request, response) {

	var isQualifyingBenefitSuspended = request.session.data['isQualifyingBenefitSuspended']
    var sourceOfInformationUpdateBreak = request.session.data['sourceOfInformationUpdateBreak']

	if (isQualifyingBenefitSuspended == "Yes"){
		response.redirect("/breaks-in-care/when-did-suspension-start_add-new")
	} else if (isQualifyingBenefitSuspended == "No" && sourceOfInformationUpdateBreak == "Supersession") {
		response.redirect("/breaks-in-care/consider-decision-from-date_supersession")
	} else {
        response.redirect("/breaks-in-care/effective-decision-start-date_revision_add-new")
    }
})
// END DO YOU PAY INTO PRIVATE PENSION?

// SOURCE OF INFORMATION
router.post('/source-of-information-answer', function(request, response) {

	var sourceOfInformation = request.session.data['sourceOfInformation']

	if (sourceOfInformation == "Claim"){
		response.redirect("/breaks-in-care/carer-start-carers-allowance")
	} else {
        response.redirect("/breaks-in-care/why-not-care-35-hours")
    }
})
// END SOURCE OF INFORMATION

// END BREAKS IN CARE
