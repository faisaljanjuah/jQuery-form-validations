<div class="contentScroll">
	<div class="contentWrapper">
		<ul class="breadcrumb">
			<li><a href="#">Home</a></li>
			<li><a href="#">Morning</a></li>
			<li><a href="#">Day</a></li>
			<li><a href="#">Evening</a></li>
			<li>Night</li>
		</ul>

		<form action="#" class="validateForm">

			<div class="row questionsContainer">

				<div class="addMoreQuestionButton col-xs-12 pb15">
					<button class="addMoreQuestion btn btn-primary btn-wide">Add Question <i class=" plr5 glyphicon glyphicon-plus"></i></button>
					<button type="submit" style="display:none" class="submitFormBtn pull-right btn btn-success btn-wide">
						Submit
						<i class=" plr5 glyphicon glyphicon-ok"></i>
					</button>
				</div>
			</div>
			<script>
				var paramQuestionNaming = "question";
				var counter = 0;
				$(document).on("click", ".deleteAddedQuestion", function(e) {
					e.preventDefault();
					var t = confirm("This Question will be deleted");

					if (t) {
						counter--;
						$(this).closest(".addedNewQuestion").fadeOut(500, function() {
							$(this).remove();
						});
						if (counter == 0){
							$(".submitFormBtn").fadeOut();
						}
					}
				});
				$(document).on("click", ".deleteAddedAns", function(e) {
					e.preventDefault();
					var counterAnsCheck = $(this).closest(".appendMoreAns").find(".addMoreOptions").attr("data-anscounter");

					if (parseInt(counterAnsCheck) < 2 || $(this).closest(".defaultRadio").find(".radioCheck").is(':checked')) {
						alert("You are not allowed to delete last or selected Answer");
					} else {
						$(this).closest(".appendMoreAns").find(".addMoreOptions").attr("data-anscounter", parseInt(counterAnsCheck) - 1);
						$(this).closest(".appendMoreAns").find(".addMoreOptions").fadeIn();
						$(this).closest(".defaultRadio").fadeOut(500, function() {
							$(this).remove();
						});
					}
				});
				$(document).on("click", ".addMoreOptions", function(e) {
					e.preventDefault();
					var naming = $(this).attr("data-answerNaming");
					var counter = $(this).attr("data-ansCounter");
					var idGenN = naming + "_selected_" + (parseInt(counter) + 1);
					var idGenName = naming + "_selected";
					var ansNamingN = naming + "_options_" + (parseInt(counter) + 1);
					$(this).closest(".appendMoreAns").find(".inputAnsContainer").append("<div class=\"defaultRadio\"><input class=\"radioCheck\" type=\"radio\" id=\"" + idGenN + "\" name=\"" + idGenName + "\"/><label for=\"" + idGenN + "\"><input type=\"text\" value=\"\" name=\"" + ansNamingN + "\" class=\"inputAns required\" placeholder=\"Type Answer here\"/></label><button class=\"btn deleteAddedAns m5 btn-danger pull-right btn-sm\"><i class=\" plr5 glyphicon glyphicon-trash\"></i></button></div>");
					$(this).attr("data-ansCounter", parseInt(counter) + 1);

					if (parseInt(counter) + 1 == 10) {
						$(this).fadeOut();
					}
				});
				$(document).on("click", ".addMoreQuestion", function(e) {
					var counterAns = 1;
					$(".submitFormBtn").fadeIn();
					e.preventDefault();
					counter++;
					var questionNaming = paramQuestionNaming + "_" + counter;
					var idGen = questionNaming + "_selected_" + counterAns;
					var idGenNamez = questionNaming + "_selected";
					var ansNaming = questionNaming + "_options_" + counterAns;
					var template = "<div class=\"col-xs-12 addedNewQuestion\" data-namingOptions=\"" + questionNaming + "\"><div class=\"form-field gapper\"><div class=\"ptb10\">Question<button class=\"btn deleteAddedQuestion btn-danger pull-right btn-sm\"><i class=\" plr5 glyphicon glyphicon-trash\"></i></button></div><input type=\"text\" value=\"\" class='required' name=\"" + questionNaming + "\" placeholder=\"Type your Question here\"/><div class=\"form-field ptb20 appendMoreAns\"><label>Please Add Options And Select Answer</label><div class=\"dBlock inputAnsContainer\"><div class=\"defaultRadio\"><input class=\"radioCheck\" checked type=\"radio\" id=\"" + idGen + "\" name=\"" + idGenNamez + "\"/><label for=\"" + idGen + "\"><input type=\"text\" value=\"\" name=\"" + ansNaming + "\" class=\"inputAns required\" placeholder=\"Type Answer here\"/></label><button class=\"btn deleteAddedAns m5 btn-danger pull-right btn-sm\"><i class=\" plr5 glyphicon glyphicon-trash\"></i></button></div></div><button data-ansCounter=\"" + counterAns + "\" data-answerNaming=\"" + questionNaming + "\" class=\"btn addMoreOptions btn-info btn-sm\">Add More Answer <i class=\" plr5 glyphicon glyphicon-plus\"></i></button></div></div></div>"
					$(template).hide().insertAfter(".addMoreQuestionButton").fadeIn(1000);
				});
			</script>

		</form>
	</div>
</div>