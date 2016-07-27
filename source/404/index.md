---
title: 404 - Page not found
permalink: /404
---

Oops! This page is not exist.
Please go back to ![Home page](http://thisis577.github.io).

<style>
	header ul.nav.nav-list, .post-info, .logo-link .subtitle {
		display: none;
	}
	header a.logo-link {
		position: relative;
		height: 120px;
		width: 120px;
	}
	header a.logo-link:before {
		content: '!';
		color: white;
		border-radius: 2em;
		background: #f66;
		display: inline-block;
		height: 1.5em;
		position: absolute;
		top: .65em;
		left: .65em;
		width: 1.5em;
		text-align: center;
		font-weight: 500;
		z-index: 5;
	}
	header a.logo-link:after {
		border: 3px solid #f66;
		border-radius: 120px;
		content: '';
		display: inline-block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 104px;
		height: 104px;
	}
	.wrap {
		padding-top: 3em;
	}
	header {
		padding-bottom: 0;
		display: inline-block;
		margin-left: 6em;
		float: left;
	}
	section.container {
		display: inline-block;
		margin-left: 3em;
		margin-bottom: 0;
	}
	.post-block .post-title {
		margin-top: 0;
	}

	/* mobile */
	@media screen and (max-width: 700px) {
		.wrap {
			padding-top: 1em;
		}
		header {
			margin-left: 1em;
			display: block;
			float: none;
			text-align: left;
		}
		section.container {
			display: block;
			margin-left: 1em;
		}
	}
</style>