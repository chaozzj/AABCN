function QuizQuestion(question, choices, correctAnswer){
  this.question = question;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
}
  
var allQuestions = [
  new QuizQuestion("¿Compra usted licor en diferentes lugares de manera que en ninguno se enteren de la cantidad real que adquiere?",["Si", "No"],0),
  new QuizQuestion("¿Esconde usted las botellas vacías y se deshace de ellas secretamente?",["Si", "No"],0),
  new QuizQuestion("¿Planea por anticipado \“darse un sueldo\” a sí misma con un traguito por ese trabajo tan duro que le espera en las faenas de su hogar para cuando lo haya terminado?",["Si", "No"],0),
  new QuizQuestion("¿Se muestra usted a veces débil respecto a la educación de sus hijos para compensar el sentimiento de culpabilidad por la forma en que se comporta con ellos cuando está bebida?",["Si", "No"],0),
  new QuizQuestion("¿Tiene usted \“lagunas mentales\”, o sea, periodos acerca de los no recuerda nada?",["Si", "No"],0),
  new QuizQuestion("¿No ha telefoneado alguna vez al día siguiente a la anfitriona de una fiesta preguntándole si no se comportó mal con alguien o hizo el ridículo?",["Si", "No"],0),
  new QuizQuestion("¿Toma usted una o dos copas extras preparándose para ir a alguna fiesta en la que se servirá licor?",["Si", "No"],0),
  new QuizQuestion("¿Se siente usted más ingeniosa o más atractiva cuando está bebiendo?",["Si", "No"],0),
  new QuizQuestion("¿Siente usted pánico cuando se le aproximan algunos días sin beber, como aquellos que pasa en casa de algún familiar?",["Si", "No"],0),
  new QuizQuestion("¿Inventa usted actos sociales para poder beber, como invitar a amigos a comer, a tomar la copa, a cenar, o a jugar cartas?",["Si", "No"],0),
  new QuizQuestion("Cuando están presentes otras personas, ¿evita leer artículos, o ver películas o novelas en la TV acerca de mujeres alcohólicas, pero las lee o las ve cuando está a solas?",["Si", "No"],0),
  new QuizQuestion("¿Suele traer licor en su bolsa de mano?",["Si", "No"],0),
  new QuizQuestion("¿Se pone a la defensiva cuando alguien hace mención a su forma de beber?",["Si", "No"],0),
  new QuizQuestion("¿Bebe usted cuando se encuentra presionada o después de una discusión?",["Si", "No"],0),
  new QuizQuestion("¿Maneja usted a pesar de haber estado bebiendo, pero sintiéndote segura de que conserva un completo control de ti misma?",["Si", "No"],0)
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
        if((currentquestion==allQuestions.length-1)){
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
