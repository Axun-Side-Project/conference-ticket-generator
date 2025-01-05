<template>
	<form @submit.prevent="hanldeSubmitForm">

		<!-- Avatar -->
		<section class="avatar form-group">
			<label class="form-label" for="avatar">Upload Avatar</label>
			<input type="file" id="avatar">
			<label class="drag-label" for="avatar">
				<div class="drag-n-drop-select-file">
					<img :src="upload_icon" alt="">
					<p>Drag and drop or click to upload</p>
				</div>
			</label>
		</section>
		
		<!-- Full Name -->
		<section class="form-group">
			<label class="form-label" for="fullName">Full Name</label>
			<input type="text" id="fullName" class="form-input" v-model="formData.name" required />
		</section>
		
		<!-- Email Address -->
		<section class="form-group">
			<label class="form-label" for="emailAddress">Email Address</label>
			<input type="email" id="emailAddress" class="form-input" placeholder="example@email.com" v-model="formData.email" required />
		</section>
		
		<!-- Github Username -->
		<section class="form-group">
			<label class="form-label" for="githubUsername">Github Username</label>
			<input type="text" id="githubUsername" class="form-input" placeholder="@yourusername" v-model="formData.github_username" required />
		</section>

		<button class="generate-button">
			Generate My Ticket
		</button>

	</form>
</template>

<script>
import upload_icon from "/assets/images/icon-upload.svg";

export default {
	name: "Form",
	data() {
		return {
			upload_icon: upload_icon,
			formData: {},
		};
	},
	methods: {
		hanldeSubmitForm() {
			this.$store.dispatch("setForm", this.formData);
		},
	},
}
</script>

<style lang="scss" scoped>
form {
	display: flex;
	flex-direction: column;
	row-gap: 1.4rem;
	z-index: 10;
	min-width: 24vw;
	margin-top: 1rem;
	section.avatar {
		label.drag-label {
			border: 2px solid #ffffff00;
			border-radius: 0.4rem;
			padding: 0.1rem;
			&:hover {
				border: 2px solid #ffffff4e;
			}
		}
		div.drag-n-drop-select-file {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			row-gap: 0.6rem;
			padding: 2rem;
			border: 1px dashed white;
			border-radius: 0.4rem;
			background: #ffffff37;
			cursor: pointer;
			img {
				background: #ffffff37;
				padding: 0.2rem;
				border-radius: 0.5rem;
			}
		}
	}
	section.form-group {
		display: flex;
		flex-direction: column;
		row-gap: 0.4rem;
	}
	label.form-label {
		font-size: 20px;
	}
	input[type="file"] {
		display: none;
	}
	input[type="text"].form-input,
	input[type="email"].form-input {
		background: hsla(0, 0%, 100%, 0.2);
		padding: 0.8rem;
		font-size: 1.1rem;
		color: white;
		border-radius: 0.4rem;
		border: 1px solid white;
		margin: 0.2rem;
		&::placeholder{
			color: #b8b8b8;
		}
		&:focus {
			outline: 5px solid #ffffff4e;
		}
	}
	button.generate-button {
		margin-top: 0.5rem;
		cursor: pointer;
		background: hsl(7, 88%, 67%);
		width: 100%;
		padding: 0.8rem;
		border-radius: 0.5rem;
		font-size: 1.2rem;
		font-weight: bold;
		&:hover {
			background: hsl(7, 71%, 60%);
		}
	}
}
</style>