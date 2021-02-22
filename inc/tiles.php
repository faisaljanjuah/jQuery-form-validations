<div class="contentScroll">
	<div class="contentWrapper">
		<ul class="breadcrumb">
			<li><a href="#">Home</a></li>
			<li><a href="#">Morning</a></li>
			<li><a href="#">Day</a></li>
			<li><a href="#">Evening</a></li>
			<li>Night</li>
		</ul>


	</div>
<div class="mainContent">
<div class="tilesWrapper">	
	<div class="container">
		<div class="tiles">
			<div class="row">
				<div class="col-xs-12 col-sm-12">
					<div class="col-sm-3">
						<a href="#" class="tiles-items">
							<div class="icon-row item">
								<div class="card-body">
									<div class="card-content">
										<i class="icon glyphicon glyphicon-shopping-cart"></i>
										<p class="order-type">Pending Orders</p>
										<p class="order-quantity">14</p>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-sm-3">
						<a href="#" class="tiles-items">
							<div class="icon-row item">
								<div class="card-body">
									<div class="card-content">
										<i class="icon glyphicon glyphicon-shopping-cart"></i>
										<p class="order-type">Completed Orders</p>
										<p class="order-quantity">32</p>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-sm-3">
						<a href="#" class="tiles-items">
							<div class="icon-row item">
								<div class="card-body">
									<div class="card-content">
										<i class="icon glyphicon glyphicon-shopping-cart"></i>
										<p class="order-type">Refund Request</p>
										<p class="order-quantity">74</p>
									</div>
								</div>
							</div>
						</a>
					</div>	
					<div class="col-sm-3">
						<a href="#" class="tiles-items">
							<div class="icon-row item">
								<div class="card-body">
									<div class="card-content">
										<i class="icon glyphicon glyphicon-shopping-cart"></i>
										<p class="order-type">Refund Request</p>
										<p class="order-quantity">88</p>
									</div>
								</div>
							</div>
						</a>
					</div>
						
				</div>
			</div>
		</div>
		<div class="tiles">
			<div class="row">
				<div class="col-xs-12 col-sm-12">
					<div class="col-sm-3">
						<a href="#" class="tiles-items">
							<div class="icon-row item">
								<div class="card-body">
									<div class="card-content">
										<i class="icon glyphicon glyphicon-shopping-cart"></i>
										<p class="order-type">Pending Orders</p>
										<p class="order-quantity">14</p>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-sm-3">
						<a href="#" class="tiles-items">
							<div class="icon-row item">
								<div class="card-body">
									<div class="card-content">
										<i class="icon glyphicon glyphicon-shopping-cart"></i>
										<p class="order-type">Completed Orders</p>
										<p class="order-quantity">32</p>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="col-sm-3">
						<a href="#" class="tiles-items">
							<div class="icon-row item">
								<div class="card-body">
									<div class="card-content">
										<i class="icon glyphicon glyphicon-shopping-cart"></i>
										<p class="order-type">Refund Request</p>
										<p class="order-quantity">74</p>
									</div>
								</div>
							</div>
						</a>
					</div>	
					<div class="col-sm-3">
						<a href="#" class="tiles-items">
							<div class="icon-row item">
								<div class="card-body">
									<div class="card-content">
										<i class="icon glyphicon glyphicon-shopping-cart"></i>
										<p class="order-type">Refund Request</p>
										<p class="order-quantity">88</p>
									</div>
								</div>
							</div>
						</a>
					</div>
						
				</div>
			</div>
		</div>
		
		<div class="chart">
			<div class="row">
				<div class="graph-chart">
					<div class="col-xs-12 col-sm-12">
						<div id="container"></div>	
					</div>
				</div>
			</div>
		</div>	
	</div>
</div>
</div>
<script type="text/javascript">
	Highcharts.chart('container', {

    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    credits: {
	    enabled: false
	},
    yAxis: {
        max: 300,
         max: 400
    },
    yAxis: {
	    title: {
	        text: null
	    }
	},
     title:{
        text:''
    },
     subTitle:{
        text:''
      },

    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        name: ''
    }]

}, function (chart) {

    var point = chart.series[0].data[8],
        text = chart.renderer.text(
            'Max',
            point.plotX + chart.plotLeft + 10,
            point.plotY + chart.plotTop - 10
        ).attr({
            zIndex: 5
        }).add(),
        box = text.getBBox();

    chart.renderer.rect(box.x - 5, box.y - 5, box.width + 10, box.height + 10, 5)
        .attr({
            fill: '#FFFFEF',
            stroke: 'gray',
            'stroke-width': 1,
            zIndex: 4
        })
        .add();
});
</script>
</div>
