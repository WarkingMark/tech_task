<template>
	<div id="app">
		<router-view/>
	</div>
</template>
<script>
export default {
	mounted () {
		if (this.$store.getters.messages.length > 0) {
			this.$store.dispatch('deleteAllMessages');
		}
	}
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap'); /* Подключение шрифта */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	overflow-wrap: break-word;
	outline: none;
}
:root {
	--black : #3F3F3F;
	--white : #FFFEFB;
	--gray : #EEEEEE;
	--background : #FFFEFBCC;
}
body {
	background: var(--background);
	font-size: 16px;
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: 400;
}
a {
	text-decoration: none;
	color : inherit,
}
ul {
	list-style: none;
}
.container {
	max-width: 1374px;
	margin: 0 auto;
	padding: 32px 0;
}
.section-title {
	font-size: 28px;
	margin-bottom: 16px;
	width: 100%;
}
@media (max-width : 1374px) {
	.container {
		padding: 30px;
	}
}
</style>
