<template>
	<section class="ticket">
		<img class="ticket-background" :src="ticket_pattern" alt="">
		<section class="ticker-content">
			<section class="ticket-left">
				<section class="ticket-top">
					<img :src="logo_svg" alt="">
					<p>Jan 31, 2025 / Austin, TX</p>
				</section>
				<section class="ticket-bottom">
					<div class="avatar-container">
						<img class="avatar-image" :src="ticket.avatar || avatar_image" alt="">
					</div>
					<section class="information-container">
						<p class="name">{{ ticket.name }}</p>
						<div class="github-container">
							<img :src="github_icon" alt="">
							<p class="github-username">{{ ticket.github_username }}</p>
						</div>
					</section>
				</section>
			</section>
			<div class="ticket-right">
				<p class="ticket-number">#01609</p>
			</div>
		</section>
	</section>
</template>

<script>
import logo_svg from "/assets/images/logo-full.svg";
import ticket_pattern from "/assets/images/pattern-ticket.svg";
import avatar_image from "/assets/images/image-avatar.jpg";
import github_icon from "/assets/images/icon-github.svg";

export default {
	name: "Ticket",
	data() {
		return {
			logo_svg: logo_svg,
			ticket_pattern: ticket_pattern,
			avatar_image: avatar_image,
			github_icon: github_icon,
		};
	},
	methods: {
		hanldeSubmitForm() {
			alert("Submit Form！");
		},
	},
	computed: {
		ticket() {
			return this.$store.getters["getForm"];
		},
	},
}
</script>

<style lang="scss" scoped>
section.ticket {
	top: 3rem;
	position: relative;
	overflow: hidden;
	section.ticker-content {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		section.ticket-left {
			width: 80%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			padding: 2rem;
			section.ticket-top {
				p {
					margin-left: 3rem;
				}
			}
			section.ticket-bottom {
				display: flex;
				align-items: center;
				column-gap: 1rem;
				div.avatar-container {
					aspect-ratio: 1/1;
					height: 8vh;
					overflow: hidden;
					border-radius: 0.6rem;
					img.avatar-image {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
				section.information-container {
					display: flex;
					flex-direction: column;
					justify-content: center;
					row-gap: 0.2rem;
					p.name {
						font-size: 2rem;
					}
					div.github-container {
						display: flex;
						align-items: center;
						column-gap: 0.6rem;
						p.github-username {
							
						}
					}
				}
			}
		}
		div.ticket-right {
			width: 20%;
			display: grid;
			place-content: center;
			p.ticket-number {
				font-size: 2rem;
				transform: rotateZ(90deg);
				color: #ffffff6f;
			}
		}
	}
}
</style>