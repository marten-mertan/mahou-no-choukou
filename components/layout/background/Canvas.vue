<template>
	<canvas
		class="canvas"
		ref="canvas"
	/>
</template>

<script>
export default {
	name: 'Canvas',
	data() {
		return {
			//canvas params
			canvas: '',
			ctx: '',
			width: 0,
			height: 0,

			//animation params
			start: 0,
			progress: 0,

			//stars
			stars: [],

			//points
			points: [],

			params: {
				//stars params
				initStarsPopulation: 80,
				backgroundSpeed: 0.4,

				//points params
				pointsSpeedA: 20,
				pointsSpeedB: 12,
				pointsSpeedC: 500,
				pointsSpeedChaosA: 3,
				pointsSpeedChaosB: 1,
			},

			//mouse target
			target: {
				x: 0,
				y: 0
			},
		};
	},
	methods: {
		setStar(id, x, y) {
			const r = Math.floor(Math.random() * 2) + 1;
			const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
			const color = 'rgba(255,255,255,' + alpha + ')';
			return {
				id: id,
				x: x,
				y: y,
				r: r,
				alpha: alpha,
				color: color,
			};
		},

		drawStar(star) {
			this.ctx.fillStyle = star.color;
			this.ctx.shadowBlur = star.r * 2;
			this.ctx.beginPath();
			this.ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI, false);
			this.ctx.closePath();
			this.ctx.fill();
			this.ctx.shadowBlur = 0;
		},

		moveStar(star) {
			star.y -= this.params.backgroundSpeed;
			if (star.y <= -10) star.y = this.height + 10;
			this.drawStar(star);
		},

		setPoint(id, x, y, r, color, active) {
			return {
				id: id,
				x: x,
				y: y,
				r: r,
				color: color,
				active: active,
			}
		},

		drawPoint(point) {
			if(!point.circle.active) return;
			this.ctx.shadowBlur = point.circle.r * 2;
			this.ctx.beginPath();
			this.ctx.arc(point.circle.x, point.circle.y, point.circle.r, 0, 2 * Math.PI, false);
			this.ctx.closePath();
			this.ctx.fillStyle = 'rgba(156,217,249,'+ point.circle.active+')';
			this.ctx.fill();
			this.ctx.shadowBlur = 0;
		},

		movePoint(point) {
			point.x = point.originX + this.params.pointsSpeedA*Math.sin(this.progress / this.params.pointsSpeedC + point.circle.id*this.params.pointsSpeedChaosA);
			point.circle.x = point.x;
			point.y = point.originY + this.params.pointsSpeedB*Math.cos(this.progress / this.params.pointsSpeedC + point.circle.id*this.params.pointsSpeedChaosB);
			point.circle.y = point.y;
			this.drawPoint(point);
		},

		drawLines(point) {
			if(!point.active) return;
			for(let i = 0; i<point.closest.length; i++) {
				this.ctx.beginPath();
				this.ctx.moveTo(point.x, point.y);
				this.ctx.lineTo(point.closest[i].x, point.closest[i].y);
				this.ctx.strokeStyle = 'rgba(156,217,249,'+ point.active+')';
				this.ctx.stroke();
			}
		},

		setCanvasSize() {
			this.width = document.documentElement.clientWidth;
			this.height = document.documentElement.clientHeight;

			this.target.x = this.width/2;
			this.target.y = this.height/2;

			this.canvas.setAttribute('width', this.width);
			this.canvas.setAttribute('height', this.height);
		},

		init() {
			this.ctx.strokeStyle = 'white';
			this.ctx.shadowColor = 'white';

			//init stars
			for (let i = 0; i < this.params.initStarsPopulation; i++) {
				this.stars[i] = this.setStar(i, Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height));
				this.drawStar(this.stars[i]);
			}

			//init points
			let id = 0;
			for(let x = 0; x < this.width; x = x + this.width/15) {
				for(let y = 0; y < this.height; y = y + this.height/15) {
					const px = x + Math.random()*this.width/15;
					const py = y + Math.random()*this.height/15;
					const p = {
						id: id++,
						x: px,
						originX: px,
						y: py,
						originY: py,
						active: 0,
						circle: this.setPoint(id, px, py, Math.random()*2+1, 'rgba(255,255,255,0.3)', 0)
					};

					this.points.push(p);
				}
			}

			// for each point find the 5 closest points
			for(let i = 0; i < this.points.length; i++) {
				const closest = [];
				const p1 = this.points[i];
				for(let j = 0; j < this.points.length; j++) {
					const p2 = this.points[j];
					if(!(p1 === p2)) {
						let placed = false;
						for(let k = 0; k < 5; k++) {
							if(!placed) {
								if(closest[k] === undefined) {
									closest[k] = p2;
									placed = true;
								}
							}
						}

						for(let k = 0; k < 5; k++) {
							if(!placed) {
								if(this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
									closest[k] = p2;
									placed = true;
								}
							}
						}
					}
				}
				p1.closest = closest;
			}

			this.ctx.shadowBlur = 0;
			this.animate();
		},

		animate(timestamp) {
			if (!this.start) this.start = timestamp;
			this.progress = timestamp - this.start;

			this.ctx.clearRect(0, 0, this.width, this.height);

			// move stars
			for (let i = 0; i < this.stars.length; i++) {
				this.moveStar(this.stars[i]);
			}

			//move points
			for(let i = 0; i < this.points.length; i++) {
				this.movePoint(this.points[i]);
				// detect points in range
				if(Math.abs(this.getDistance(this.target, this.points[i])) < 4000) {
					this.points[i].active = 0.3;
					this.points[i].circle.active = 0.6;
				} else if(Math.abs(this.getDistance(this.target, this.points[i])) < 20000) {
					this.points[i].active = 0.1;
					this.points[i].circle.active = 0.3;
				} else if(Math.abs(this.getDistance(this.target, this.points[i])) < 40000) {
					this.points[i].active = 0.02;
					this.points[i].circle.active = 0.1;
				} else {
					this.points[i].active = 0;
					this.points[i].circle.active = 0;
				}

				this.drawLines(this.points[i]);
			}

			requestAnimationFrame(this.animate);
		},

		onResize() {
			this.setCanvasSize();
			for (let i = 0; i < this.params.initStarsPopulation; i++) {
				this.stars[i] = this.setStar(i, Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height));
				this.drawStar(this.stars[i]);
			}

			//init points
			let id = 0;
			for(let x = 0; x < this.width; x = x + this.width/15) {
				for(let y = 0; y < this.height; y = y + this.height/15) {
					const px = x + Math.random()*this.width/15;
					const py = y + Math.random()*this.height/15;
					const p = {
						id: id++,
						x: px,
						originX: px,
						y: py,
						originY: py,
						active: 0,
						circle: this.setPoint(id, px, py, Math.random()*2+1, 'rgba(255,255,255,0.3)', 0)
					};

					this.points[id].x = px;
					this.points[id].originX = px;
					this.points[id].y = py;
					this.points[id].originY = py;
					this.points[id].circle = this.setPoint(id, px, py, Math.random()*2+1, 'rgba(255,255,255,0.3)', 0);
				}
			}
		},

		getDistance(p1, p2) {
			return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
		},

		onMouseMove(e) {
			if (e.pageX || e.pageY) {
				this.target.x = e.pageX;
				this.target.y = e.pageY;
			}
			else if (e.clientX || e.clientY)    {
				this.target.x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				this.target.y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}

		},
	},
	mounted() {
		this.canvas = this.$refs.canvas;
		this.ctx = this.canvas.getContext('2d');

		this.setCanvasSize();
		this.init();

		if(!('ontouchstart' in window)) {
			window.addEventListener('mousemove', this.onMouseMove);
		}
		window.addEventListener('resize', this.onResize);
	},

	unmounted() {
		window.removeEventListener('mousemove', this.onMouseMove);
		window.removeEventListener('resize', this.onResize);
	},
};
</script>

<style lang="scss" scoped>
.canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
