$(document).ready(function () {
    $('.list-group-item').click(function () {
        var videoSrc = $(this).data('video-src');
        $('#courseVideo').attr('src', videoSrc);
        $('video').prop('controlsList', 'nodownload');
    });

    $('.btn-link').click(function () {
        var collapseId = $(this).attr('data-target');
        var otherCollapseIds = $('.btn-link[data-target]').not(this).map(function () {
            return $(this).attr('data-target');
        }).get();

        $(collapseId).collapse('show');
        $(otherCollapseIds.join(',')).collapse('hide');
    });

    $('.list-group-item').click(function () {
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
        $('#courseVideo').css('display', 'block');
    });
});

function checkCredentials() {
    var credentials = [
        { email: "mo212el4@gmail.com", password: "123", username: "Mohamed Elsayed" },
        { email: "towmail@gg.com", password: "1234", username: "John Doe" },
        { email: "threemail@ha.com", password: "12345", username: "Jane Smith" }
    ];

    var emailInput = document.getElementById("emailInput").value;
    var passwordInput = document.getElementById("passwordInput").value;

    var matchedCredential = credentials.find(function (credential) {
        return credential.email === emailInput && credential.password === passwordInput;
    });

    if (matchedCredential) {
        showSuccessMessage("Access granted. Welcome!");

        document.getElementById("loginForm").style.display = "none";
        document.getElementById("videoContainer").style.display = "block";
        document.getElementById("welcomeMessage").innerText = "Hi, " + matchedCredential.username + "!";

        // Disable right-click context menu
        document.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });

        // Disable video downloading
        var video = document.getElementById("courseVideo");
        video.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });
    } else {
        showAccessDeniedMessage("Access denied. Invalid email or password.");
    }
}

function showAccessDeniedMessage(message) {
    var accessDeniedNotification = document.getElementById("accessDeniedNotification");
    accessDeniedNotification.innerText = message;
    accessDeniedNotification.style.display = "block";

    setTimeout(function () {
        accessDeniedNotification.style.display = "none";
    }, 5000);
}

function showSuccessMessage(message) {
    var successNotification = document.getElementById("successNotification");
    successNotification.innerText = message;
    successNotification.style.display = "block";

    setTimeout(function () {
        successNotification.style.display = "none";
    }, 5000);
}

function showTermsWindow() {
    var termsWindow = document.getElementById("termsWindow");
    termsWindow.style.display = "flex";
}

function closeTermsWindow() {
    var termsWindow = document.getElementById("termsWindow");
    termsWindow.style.display = "none";
}
