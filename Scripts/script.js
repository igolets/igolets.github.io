var map;
var points = [
    {
        title: "Домик Чехова",
        content: "Домик Чехова — государственный мемориальный музей, расположенный в Таганроге в небольшом флигеле, в котором родился А. П. Чехов",
        question: "Дом, в котором родился великий писатель А.П. Чехов",
        lat: 47.206599,
        lng: 38.931217
    },
    {
        title: "Лавка Чеховых",
        content: "«Лавка Чеховых» — музей в городе Таганрог Ростовской области. Входит в состав Таганрогского государственного литературного и историко-архитектурного музея-заповедника.",
        question: "Место, в котором работал А.П. Чехов с 9 до 14 лет",
        lat: 47.215801,
        lng: 38.918177
    },
    {
        title: "Литературный музей",
        content: "Литературный музей А.П. Чехова — музей в Ростовской области, расположен в здании бывшей мужской классической гимназии, в которой учился Чехов",
        question: "Место, где А.П. Чехов получил первую двойку",
        lat: 47.215490,
        lng: 38.921175
    },
    {
        title: "Памятник Петру I",
        content: "Памятник российскому императору Петру I Великому работы скульптора М. М. Антокольского, установленный в Таганроге в 1903 году. Единственный сохранившийся до настоящего времени полноразмерный экземпляр, отлитый под непосредственным руководством автора. Памятник установлен в честь 200-летия города.",
        question: "Памятник, в создании которого большое участие принял А.П. Чехов",
        lat: 47.205032,
        lng: 38.946393
    },
    {
        title: "Памятник Ф. Раневской",
        content: "Памятник Фаине Раневской — памятник советской актрисе Ф. Г. Раневской, установленный на её родине, в Таганроге, в мае 2008 года.",
        question: "Памятник великой актрисе, родившейся у нас в городе.",
        lat: 47.210569,
        lng: 38.933870
    },
    {
        title: "Памятник А. П. Чехову",
        content: "Памятник А. П. Чехову — памятник российскому писателю А.П. Чехову работы скульптора И.М. Рукавишникова, установленный в Таганроге, в Сквере имени Чехова, в 1960 году.",
        question: "Памятник писателю А. П. Чехову в состоянии задумчивости :)",
        lat: 47.211269,
        lng: 38.922197
    },
    {
        title: "Памятник Гагарину И Королеву",
        content: "Памятник Королёву и Гагарину — бронзовая скульптура Юрия Гагарина и Сергея Королёва работы скульптора О. К. Комова, установленная в Таганроге на улице Чехова перед корпусом «А» Инженерно-технологической академии Южного Федерального университета.",
        question: "Памятник основоположникам советской космонавтики.",
        lat: 47.205322,
        lng: 38.939363
    },
    {
        title: "Памятник Железнодорожникам",
        content: "Паровоз на площади восстания у Вокзала Таганрог-2. В память о бое красных с белыми за здание вокзала. Знаменитый Паровоз Эш-4504 /Юп-4504/ Парозоз с платформой врезался в вокзал с белогвардейцами в гражданскую войну и взорвался. В качестве памятника-монумента погибшим железнодорожникам был установлен другой паровоз этой же серии, только номер родной. Это одна из первых модификаций паровозов серии 'Э'.",
        question: "Памятник, установленный на площади Восстания как символ победы таганрожскиж ракбочих над белогвардейцами.",
        lat: 47.221010,
        lng: 38.915001
    },
    {
        title: "Императору Александру I",
        content: "Памятник Александру I — памятник российскому императору Александру I работы скульптора И. П. Мартоса и архитектора А. И. Мельникова, установленный в Таганроге в 1831 году.",
        question: "Памятник поставленный в честь императора, скончавшегося в Таганроге.",
        lat: 47.211653,
        lng: 38.927002
    },
    {
        title: "Бюст Ивана Голубца",
        content: "Слева от современного здания школы-гимназии №2 - преемницы старой гимназии стоит бюст еще одного ее известного выпускника - первого на Черноморском флоте Героя Советского союза Ивана Карповича Голубца, который во время войны совершил подвиг в Севастополе. Когда вражеская авиация совершала налет на город, одна зажигательная бомба попала в торпедный катер, на палубе которого были сложены глубинные бомбы. Если бы они взорвались, то не уцелело бы ни одно судно в бухте. На катере начался пожар, но Голубец, рискуя жизнью, бросился сбрасывать эти боезаряды за борт. К сожалению, все сбросить не успел. Катер взорвался и унес жизнь храброго матроса, но ущерб от этого взрыва для судов в бухте и города был минимален.",
        question: "Первый матрос черноморского флота, получивший звание героя СССР в 1942 году(посмертно)",
        lat: 47.215255,
        lng: 38.922351
    }
];
var markers = [];
var lastInfoWin;
var quizItem;
var quizSelected;
var quizAnswered = 0, quizCorrectAnswers = 0;

function initMap() {
    var styleArray = [
        {
            featureType: "all",
            stylers: [
                { saturation: -80 }
            ]
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                { hue: "#00ffee" },
                { saturation: 50 }
            ]
        },
        {
            featureType: "poi.business",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];
    var styledMap = new window.google.maps.StyledMapType(styleArray, { name: "Styled Map" });

    map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 47.215073, lng: 38.913603 },
        zoom: 15,
        minZoom: 13,
        mapTypeControlOptions: {
            mapTypeIds: [window.google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    });

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    points.forEach(function (item) {
        var marker = new window.google.maps.Marker({
            position: { lat: item.lat, lng: item.lng },
            map: map,
            animation: window.google.maps.Animation.DROP,
            title: item.title,
            customInfo: item
        });
        markers.push(marker);

        var infowindow = new window.google.maps.InfoWindow({
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h3 id="firstHeading" class="firstHeading">' + item.title + '</h3>' +
                '<div id="bodyContent">' +
                '<p>' + item.content + '</p>' +
                '</div>' +
                '</div>'
        });

        marker.addListener('click', function () {
            markers.forEach(function (item) {
                item.setAnimation(null);
            });
            marker.setAnimation(window.google.maps.Animation.BOUNCE);
            quizSelected = marker["customInfo"];
        });

        marker.addListener('click', function () {
            if (lastInfoWin !== undefined) {
                lastInfoWin.close();
                lastInfoWin = undefined;
            }
            infowindow.open(map, marker);
            lastInfoWin = infowindow;
        });
    });

    $("#quizAnswer").click(AnswerQuestion);

    NextQuestion();
}

function NextQuestion() {
    var tempMarker = markers[Math.floor(Math.random() * markers.length)];
    quizItem = tempMarker['customInfo'];
    $("#quizQuestion").text(quizItem.question);
    quizSelected = undefined;
}

function AnswerQuestion() {
    if (quizSelected === undefined) {
        return;
    }
    quizAnswered++;
    if (quizSelected === quizItem) {
        quizCorrectAnswers++;
        ShowAnswerIsCorrect();
        window.ga('send', 'event', 'Answer', 'Correct', quizItem.title);
    } else {
        ShowAnswerIncorrect();
        window.ga('send', 'event', 'Answer', 'Wrong', quizItem.title);
    }
    UpdateTotalCounts();
    NextQuestion();
    StopAnimations();
}

function UpdateTotalCounts() {
    $("#quizAnswered").text(quizAnswered);
    $("#quizCorrectAnswers").text(quizCorrectAnswers);
}

function ShowAnswerIsCorrect() {
    $("#quizMessageCorrect").removeClass("hidden").addClass("show");
    $("#quizMessageWrong").removeClass("show").addClass("hidden");
}

function ShowAnswerIncorrect() {
    $("#quizMessageWrong").removeClass("hidden").addClass("show");
    $("#quizMessageCorrect").removeClass("show").addClass("hidden");
}

function StopAnimations() {
    if (lastInfoWin !== undefined) {
        lastInfoWin.close();
        lastInfoWin = undefined;
    }
    markers.forEach(function (item) {
        item.setAnimation(null);
    });
}