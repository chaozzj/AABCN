function QuizQuestion(question, choices, correctAnswer){
  this.question = question;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
}
  
var allQuestions = [
  new QuizQuestion("¿Ha tratado alguna vez de dejar de beber por una semana o más sin haber logrado cumplir el plazo?",["Si", "No"],0),
  new QuizQuestion("¿Le gustaría que, con respecto a la bebida, la gente no se metiera en lo que no le importa, dejando de decirle que tiene que hacer?",["Si", "No"],0),
  new QuizQuestion("¿Ha llegado a cambiar de una bebida a otra con la esperanza de que eso le ayudará a no emborracharse?",["Si", "No"],0),
  new QuizQuestion("Durante el último año ¿Ha tomado un trago por la mañana? ",["Si", "No"],0),
  new QuizQuestion("¿Envidia a la gente que puede beber sin meterse en dificultades?",["Si", "No"],0),
  new QuizQuestion("Durante el último año ¿Ha tenido problemas que estén relacionados con la bebida?",["Si", "No"],0),
  new QuizQuestion("¿Ha intentado obtener tragos “adicionales” en una fiesta debido a que no obtuvo los suficientes?",["Si", "No"],0),
  new QuizQuestion("¿Se dice así mismo que puede dejar de beber en el momento que quisiera, aunque continúe emborrachándose sin tener la intención de hacerlo?",["Si", "No"],0),
  new QuizQuestion("¿Ha faltado algunos días a su trabajo a causa de la bebida?",["Si", "No"],0),
  new QuizQuestion("¿Ha tenido lagunas mentales?",["Si", "No"],0),
  new QuizQuestion("¿Ha llegado a sentir que su vida sería mejor si no bebiera?",["Si", "No"],0)
];

var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div class="boxed-text half-bottom"><div class="fac fac-radio fac-blue"><input type="radio" id="option' + i + '" name="option" value="' + i + '" class="options"><label for="option' + i + '">' + options[i] + '</label></div><br/></div>';
  }
  $('#form').html(formHtml);
  $(".options:eq(0)").prop('checked', true);
}

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  }
}

$(document).ready(function(){
	
  var $jumbotron = $(".jumbotron");
  var $start = $("#start");
  var $progressbar = $("#progressbar");
  var $next = $("#next");
  var $result = $("#result");
  var $result2 = $("#result2");
  var $result3 = $("#result3");
  var $result4 = $("#result4");
  
	$jumbotron.hide();
	$start.click(function() {
	    $jumbotron.fadeIn();
	    $(this).hide();
  	});

	/*$(function() {
		$progressbar.progressbar({
			max: allQuestions.length-1,			
			value: 0
		});
	});*/

	setupOptions();

	$next.click(function(){
      event.preventDefault();
      checkAns();
      currentquestion++;
      /*$(function() {
          $progressbar.progressbar({
              value: currentquestion
          });
        });*/
      if(currentquestion<allQuestions.length){
        setupOptions();
        if((correctAnswers>3) || (currentquestion==allQuestions.length-1)){
          $next.html("Resultados");
          $next.click(function(){
            $jumbotron.hide();
            if(correctAnswers>3){
                $result.html("<p style=\"font-weight: bold;font-size: 1.5em; color: #036;\">Existen dificultades serias con su manera de beber, la experiencia de varios millones de A.As. así lo comprueban.</p><p>Muchos de nosotros tuvimos que enterarnos de esta verdad por el camino más difícil.</p><p>Los que somos miembros de Alcohólicos Anónimos llegamos porque al fin dejamos de intentar controlar nuestra bebida, nos repugnaba admitir que nunca volveríamos a beber sin riesgo. Después oíamos decir a otros miembros de Alcohólicos Anónimos que éramos enfermos. Alcohólicos Anónimos no promete resolver los problemas de su vida, pero podemos mostrarle cómo estamos aprendiendo a vivir sin alcohol \“día tras día\”. \“Nos alejamos de ese primer trago\”, ya que, si no hay un primero, no habrá borrachera; y cuando nos liberamos del alcohol, encontramos que la vida se vuelve mucho más agradable.</p> ").hide();
            
            }else{
                $result.html("Todo esta normal ").hide();
            }
            $result.fadeIn(1500);
          });

        }
      };
  }); 
});
