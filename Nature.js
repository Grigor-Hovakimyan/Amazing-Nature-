$(document).ready(function () {

   $('#forest').click(function () {
$('#forestQuotes').css('display','block');
$('#about').css('display','none')
   });
   $('#island').click(function () {
$('#islandQuotes').css('display','block');
$('#about').css('display','none')
   });
   $('#woodenHouse').click(function () {
$('#woodenHouseQuotes').css('display','block');
$('#about').css('display','none')
   });
$('#train').click(function () {
$('#trainQuotes').css('display','block');
$('#about').css('display','none')
   });
$('#sky').click(function () {
$('#skyQuotes').css('display','block');
$('#about').css('display','none')
   });
$('#mountain').click(function () {
$('#mountainQuotes').css('display','block');
$('#about').css('display','none')
   });
$('#footerForest').click(function () {
$('#forestQuotes').css('display','block');
$('#about').css('display','none');
$('#islandQuotes,#woodenHouseQuotes,#trainQuotes,#skyQuotes,#mountainQuotes').css('display','none')
   });
$('#footerIsland').click(function () {
$('#islandQuotes').css('display','block');
$('#about').css('display','none');
    $('#forestQuotes,#woodenHouseQuotes,#trainQuotes,#skyQuotes,#mountainQuotes').css('display','none')
   });
$('#footerWoodenHouse').click(function () {
$('#woodenHouseQuotes').css('display','block');
$('#about').css('display','none');
    $('#islandQuotes,#forestQuotes,#trainQuotes,#skyQuotes,#mountainQuotes').css('display','none')
   });
$('#footerTrain').click(function () {
$('#trainQuotes').css('display','block');
$('#about').css('display','none');
    $('#islandQuotes,#woodenHouseQuotes,#forestQuotes,#skyQuotes,#mountainQuotes').css('display','none')
   });
$('#footerSky').click(function () {
$('#skyQuotes').css('display','block');
$('#about').css('display','none');
    $('#islandQuotes,#woodenHouseQuotes,#trainQuotes,#forestQuotes,#mountainQuotes').css('display','none')
   });
$('#footerMountain').click(function () {
$('#mountainQuotes').css('display','block');
$('#about').css('display','none');
    $('#islandQuotes,#woodenHouseQuotes,#trainQuotes,#skyQuotes,#forestQuotes').css('display','none')
   });


});
