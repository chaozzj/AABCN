function QuizQuestion(question, choices, correctAnswer){
  this.question = question;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
}
  
var allQuestions = [
  new QuizQuestion("¿Pierdes el tiempo destinado al estudio o al trabajo a causa de la bebida?",["Si", "No"],0),
  new QuizQuestion("¿Bebes para vencer tu timidez y sentir confianza en ti mismo?",["Si", "No"],0),
  new QuizQuestion("¿Está afectando la bebida tu reputación?",["Si", "No"],0),
  new QuizQuestion("¿Bebes para eludir responsabilidades y preocupaciones en el estudio, trabajo o el hogar?",["Si", "No"],0),
  new QuizQuestion("¿Te molesta cuando alguien te dice que bebes mucho?",["Si", "No"],0),
  new QuizQuestion("¿Tienes necesidades de un trago para invitar a un(a) joven?",["Si", "No"],0),
  new QuizQuestion("¿Has tenido problemas familiares y/o económicos por haber comprado licor?",["Si", "No"],0),
  new QuizQuestion("¿Has tenido problemas familiares por tu manera de beber?",["Si", "No"],0),
  new QuizQuestion("¿Has perdido amigos desde que comenzaste a beber?",["Si", "No"],0),
  new QuizQuestion("¿Buscas grupos en donde es fácil conseguir bebida?",["Si", "No"],0),
  new QuizQuestion("¿Bebes más que tus amigos?",["Si", "No"],0),
  new QuizQuestion("¿Bebes hasta que la botella está vacía?",["Si", "No"],0),
  new QuizQuestion("¿Has tenido lagunas mentales por tu manera de beber?",["Si", "No"],0),
  new QuizQuestion("¿Has tenido problemas con las autoridades por tu forma de beber?",["Si", "No"],0),
  new QuizQuestion("¿Has estado hospitalizado a causada de tu bebida?",["Si", "No"],0),
  new QuizQuestion("¿Te fastidia oír o leer información sobre alcoholismo?",["Si", "No"],0),
  new QuizQuestion("¿Consideras tener problemas con tu manera de beber?",["Si", "No"],0)
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
                $result.html("<h2>Análisis de los resultados</h2><p>Si su respuesta es Sí a cuatro o más preguntas, existen dificultades serias con su manera de beber, la experiencia de varios millones de A.As. así lo comprueban.</p><p>Muchos de nosotros tuvimos que enterarnos de esta verdad por el camino más difícil.</p><p>Los que somos miembros de Alcohólicos Anónimos llegamos porque al fin dejamos de intentar controlar nuestra bebida, nos repugnaba admitir que nunca volveríamos a beber sin riesgo. Después oíamos decir a otros miembros de Alcohólicos Anónimos que éramos enfermos. Alcohólicos Anónimos no promete resolver los problemas de su vida, pero podemos mostrarle cómo estamos aprendiendo a vivir sin alcohol \“día tras día\”. \“Nos alejamos de ese primer trago\”, ya que, si no hay un primero, no habrá borrachera; y cuando nos liberamos del alcohol, encontramos que la vida se vuelve mucho más agradable.</p> ").hide();
            
            }else{
                $result.html("Todo esta normal ").hide();
            }
            $result.fadeIn(1500);
          });

        }
      };
	});	
});
