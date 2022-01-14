<template>
	<div class="form">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'FormDefaultTemplate',
}
</script>

<style lang="scss" scoped>
    .form {
		display: flex;
		flex-direction: column;
		padding: 24px;
		background: var(--white);
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
		border-radius: 4px;
		margin-right: 16px;
        max-width: 440px;
        width: 33%;
        height: max-content;
		&-button {
			background: #EEEEEE;
			padding: 10px;
			width: 100%;
			text-align: center;
			font-size: 12px;
			border: none;
			border-radius: 10px;
			cursor: pointer;
			&.invalid {
				background: green;
				color : var(--white)
			}
		}
	}
	@media (max-width : 1366px) {
		.form {
			min-width: 300px;
		}
	}
	@media (max-width : 900px)  {
		.form {
			max-width: inherit;
			width: 100%;
			margin-bottom: 15px;
		}
	}
</style>