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
		response.redirect("/employment-and-income-with-expenses/when-did-you-start-trading")
	} else {
		response.redirect("/employment-and-income-with-expenses/we-need-more-information")
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

// END EZRAS ROUTES