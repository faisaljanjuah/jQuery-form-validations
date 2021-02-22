<div class="contentScroll">
	<div class="contentWrapper">
		<ul class="breadcrumb">
			<li><a href="#">Home</a></li>
			<li><a href="#">Morning</a></li>
			<li><a href="#">Day</a></li>
			<li><a href="#">Evening</a></li>
			<li>Night</li>
		</ul>


		<form action="index.php" class="validateForm">
			<legend>Validations</legend>
			
			<input type="submit" value="Submit" class="btn btn-primary btn-wide" />
			
			<div class="form-field">
				<label>Numbers Only</label>
				<input type="text" value="" class="numbersOnly" placeholder="Numbers Only" />
			</div>
			<div class="form-field">
				<label>Alphabets Only</label>
				<input type="text" value="" class="alphabetsOnly" placeholder="Alphabets Only" />
			</div>
			<div class="form-field">
				<label>Alphanumeric</label>
				<input type="text" value="" class="alphanumeric" placeholder="Alphanumeric" />
			</div>
			<div class="form-field">
				<label>Allow Decimals</label>
				<input type="text" value="" class="allowDecimals" placeholder="You can type . in numbers" />
			</div>
			<div class="form-field">
				<label>Required</label>
				<input type="text" value="" class="required" placeholder="Required" />
			</div>
			<div class="form-field">
				<label>Validate Email</label>
				<input type="text" value="" class="validateEmail" placeholder="Validate Email" />
			</div>
			<div class="form-field">
				<label>Validate Select</label>
				<select class="required">
					<option value="">-Please Select-</option>
					<option value="isb">Islamabad</option>
					<option value="rwp">Rawalpindi</option>
					<option value="">-Empty Val-</option>
				</select>
			</div>
			<div class="form-field">
				<label>Validate Textarea</label>
				<textarea class="required" placeholder="Type Somthing here..."></textarea>
			</div>
			<input type="submit" value="Submit" class="btn btn-primary btn-wide" />
		</form>

		<hr />


		<form>
			<div class="form-field">
				<label>Full Name</label>
				<input type="text" class="error" placeholder="Your Name" />
				<span class="error">Please Type your name!</span>
			</div>
			<div class="form-field">
				<label>Address</label>
				<input type="text" class="" placeholder="Your Address" />
			</div>
			<div class="form-field">
				<label>Full Name</label>
				<select>
					<option>-Please Select-</option>
				</select>
			</div>
			<div class="form-field">
				<label>Please Select Options</label>
				<div class="dBlock">
					<div class="defaultRadio">
						<input type="radio" id="opt1" name="alpha" />
						<label for="opt1">Option 1</label>
					</div>
					<div class="defaultRadio">
						<input type="radio" id="opt2" name="alpha" />
						<label for="opt2">Option 2</label>
					</div>
				</div>
			</div>
			
			<div class="form-field">
				<label>Please Select from Sets</label>
				<div class="dBlock">
					<div class="defaultRadio">
						<input type="radio" id="set1" name="set" />
						<label for="set1">set 1</label>
					</div>
					<div class="defaultRadio">
						<input type="radio" id="set2" name="set" />
						<label for="set2">set 2</label>
					</div>
				</div>
			</div>

			
			<div class="form-field">
				<label>Please Select Multiple</label>
				<div class="dBlock">
					<div class="defaultCheckbox">
						<input type="checkbox" id="mul1" name="set" />
						<label for="mul1">set 1</label>
					</div>
					<div class="defaultCheckbox">
						<input type="checkbox" id="mul2" name="set" />
						<label for="mul2">set 2</label>
					</div>
				</div>
			</div>
			<div class="form-field">
				<label>Textarea</label>
				<textarea placeholder="Type Somthing here..."></textarea>
			</div>
		</form>
		

	</div>
</div>
