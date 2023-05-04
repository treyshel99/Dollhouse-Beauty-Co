/*!
* Start Bootstrap - Bare v5.0.8 (https://startbootstrap.com/template/bare)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/////////////// LANDING SECTION ////////////////////////

/////////////// BOOK NOW SECTION ////////////////////////
// $(".bookNow").on("click",function(e){
//     e.preventDefault();
//     $("#landingSection").hide();
//     $("#servicesSection").hide();
//     $("#beforeAndAftercareSection").hide();
//     $("#photoGallerySection").hide();
//     $("#policiesSection").hide();
//     $("#consentSection").hide();
//     $("#financingSection").hide();
//     $("#bookNowSection").show();
// });

/////////////// SERVICES SECTION ////////////////////////
$("#servicesNav").on("click",function(e){
    e.preventDefault();
    $("#landingSection").hide();
    $("#bookNowSection").hide();
    $("#beforeAndAftercareSection").hide();
    $("#photoGallerySection").hide();
    $("#policiesSection").hide();
    $("#consentSection").hide();
    $("#financingSection").hide();
    $("#servicesSection").show();
});

$("#servicesSection-cosmeticTattoo").on("click",function(e){
    e.preventDefault();
    // Hide it but only if not hidden - hide
    $('#cosmeticTattooSection:visible').hide();

    // Later in the script - Show it but only If it's not visible.  
    $('#cosmeticTattooSection:hidden').show();
});

$("#servicesSection-esthetics").on("click",function(e){
    e.preventDefault();
    $('#estheticsSection:visible').hide();

    $('#estheticsSection:hidden').show();
});

$("#servicesSection-massage").on("click",function(e){
    e.preventDefault();
    $('#massageSection:visible').hide();

    $('#massageSection:hidden').show();
});

/////////////// BEFORE AND AFTERCARE SECTION ////////////////////////
$("#beforeAndAftercareNav").on("click",function(e){
    e.preventDefault();
    $("#landingSection").hide();
    $("#bookNowSection").hide();
    $("#servicesSection").hide();
    $("#photoGallerySection").hide();
    $("#policiesSection").hide();
    $("#consentSection").hide();
    $("#financingSection").hide();
    $("#beforeAndAftercareSection").show();
});

/////////////// PHOTO GALLERY SECTION ////////////////////////
$("#photoGalleryNav").on("click",function(e){
    e.preventDefault();
    $("#landingSection").hide();
    $("#bookNowSection").hide();
    $("#servicesSection").hide();
    $("#beforeAndAftercareSection").hide();
    $("#policiesSection").hide();
    $("#consentSection").hide();
    $("#financingSection").hide();
    $("#photoGallerySection").show();
});

/////////////// POLICIES SECTION ////////////////////////
$("#policiesNav").on("click",function(e){
    e.preventDefault();
    $("#landingSection").hide();
    $("#bookNowSection").hide();
    $("#servicesSection").hide();
    $("#beforeAndAftercareSection").hide();
    $("#photoGallerySection").hide();
    $("#consentSection").hide();
    $("#financingSection").hide();
    $("#policiesSection").show();
});

/////////////// CONSENT SECTION ////////////////////////
$("#consentFormsNav").on("click",function(e){
    e.preventDefault();
    $("#landingSection").hide();
    $("#bookNowSection").hide();
    $("#servicesSection").hide();
    $("#beforeAndAftercareSection").hide();
    $("#photoGallerySection").hide();
    $("#policiesSection").hide();
    $("#financingSection").hide();
    $("#consentSection").show();
});

/////////////// FINANCING SECTION ////////////////////////
$("#financingNav").on("click",function(e){
    e.preventDefault();
    $("#landingSection").hide();
    $("#bookNowSection").hide();
    $("#servicesSection").hide();
    $("#beforeAndAftercareSection").hide();
    $("#photoGallerySection").hide();
    $("#policiesSection").hide();
    $("#consentSection").hide();
    $("#financingSection").show();
});



let startDate = document.getElementById('startDate')

startDate.addEventListener('change',(e)=>{
  let startDateVal = e.target.value
  document.getElementById('startDateSelected').innerText = startDateVal
})


function sendMail() {
    var link = "mailto:treyshelton99@gmail.com"
             + "?cc=treyshelton99@gmail.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;
}

// CONSENT INFO CHANGES (LOGAN) //
let consentLists = document.querySelectorAll('.consentLists');
let consentHeaders = document.querySelectorAll(".innerConsentHeaders");

for (let i = 0; i < consentHeaders.length; i++) {
    consentHeaders[i].addEventListener('click', () => {
        // console.log(i)
        consentLists[i].style.display = (consentLists[i].style.display == 'block' ? 'none': 'block');
    })
}