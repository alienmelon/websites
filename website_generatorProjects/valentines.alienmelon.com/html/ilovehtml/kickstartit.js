(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 640,
	fps: 24,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.TILE_PIXEL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var clip_pixel = this;
		
		//random frame
		if(Math.random()*100>90){
			clip_pixel.gotoAndStop(Math.ceil(Math.random()*clip_pixel.timeline.duration));
		}
		
		this.addEventListener("mouseover", function() {
			clip_pixel.gotoAndStop(Math.ceil(Math.random()*clip_pixel.timeline.duration)+1);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(91));

	// 10x10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape.setTransform(5.5,5.5,1.1,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A8C2FF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_1.setTransform(5.5,5.5,1.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_2.setTransform(5.5,5.5,1.1,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_3.setTransform(5.5,5.5,1.1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC00").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_4.setTransform(5.5,5.5,1.1,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_5.setTransform(5.5,5.5,1.1,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660000").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_6.setTransform(5.5,5.5,1.1,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_7.setTransform(5.5,5.5,1.1,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_8.setTransform(5.5,5.5,1.1,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0099CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_9.setTransform(5.5,5.5,1.1,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CCCC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_10.setTransform(5.5,5.5,1.1,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFCC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_11.setTransform(5.5,5.5,1.1,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3399CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_12.setTransform(5.5,5.5,1.1,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3366CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_13.setTransform(5.5,5.5,1.1,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333399").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_14.setTransform(5.5,5.5,1.1,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6600CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_15.setTransform(5.5,5.5,1.1,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663399").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_16.setTransform(5.5,5.5,1.1,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660066").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_17.setTransform(5.5,5.5,1.1,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663333").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_18.setTransform(5.5,5.5,1.1,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6666CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_19.setTransform(5.5,5.5,1.1,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6699CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_20.setTransform(5.5,5.5,1.1,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#669900").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_21.setTransform(5.5,5.5,1.1,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#66FF00").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_22.setTransform(5.5,5.5,1.1,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66CCFF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_23.setTransform(5.5,5.5,1.1,1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#990000").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_24.setTransform(5.5,5.5,1.1,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#993300").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_25.setTransform(5.5,5.5,1.1,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#996600").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_26.setTransform(5.5,5.5,1.1,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999900").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_27.setTransform(5.5,5.5,1.1,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC0000").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_28.setTransform(5.5,5.5,1.1,1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC6600").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_29.setTransform(5.5,5.5,1.1,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCC00").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_30.setTransform(5.5,5.5,1.1,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_31.setTransform(5.5,5.5,1.1,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF3300").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_32.setTransform(5.5,5.5,1.1,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_33.setTransform(5.5,5.5,1.1,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF9900").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_34.setTransform(5.5,5.5,1.1,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC00").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_35.setTransform(5.5,5.5,1.1,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF00").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_36.setTransform(5.5,5.5,1.1,1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9900CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_37.setTransform(5.5,5.5,1.1,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#990099").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_38.setTransform(5.5,5.5,1.1,1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#990066").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_39.setTransform(5.5,5.5,1.1,1.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9900FF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_40.setTransform(5.5,5.5,1.1,1.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9933FF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_41.setTransform(5.5,5.5,1.1,1.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9966FF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_42.setTransform(5.5,5.5,1.1,1.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9999FF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_43.setTransform(5.5,5.5,1.1,1.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#99CCFF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_44.setTransform(5.5,5.5,1.1,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#99FFFF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_45.setTransform(5.5,5.5,1.1,1.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#99FFCC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_46.setTransform(5.5,5.5,1.1,1.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#99CC99").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_47.setTransform(5.5,5.5,1.1,1.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#99CC66").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_48.setTransform(5.5,5.5,1.1,1.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#99CC33").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_49.setTransform(5.5,5.5,1.1,1.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC00FF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_50.setTransform(5.5,5.5,1.1,1.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CC0066").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_51.setTransform(5.5,5.5,1.1,1.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CC3366").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_52.setTransform(5.5,5.5,1.1,1.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CC6666").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_53.setTransform(5.5,5.5,1.1,1.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CC9999").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_54.setTransform(5.5,5.5,1.1,1.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CC99FF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_55.setTransform(5.5,5.5,1.1,1.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CCFFFF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_56.setTransform(5.5,5.5,1.1,1.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0066").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_57.setTransform(5.5,5.5,1.1,1.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0099").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_58.setTransform(5.5,5.5,1.1,1.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF00CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_59.setTransform(5.5,5.5,1.1,1.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF00FF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_60.setTransform(5.5,5.5,1.1,1.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF33FF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_61.setTransform(5.5,5.5,1.1,1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF66FF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_62.setTransform(5.5,5.5,1.1,1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF99FF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_63.setTransform(5.5,5.5,1.1,1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFCCFF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_64.setTransform(5.5,5.5,1.1,1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_65.setTransform(5.5,5.5,1.1,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF33CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_66.setTransform(5.5,5.5,1.1,1.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF66CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_67.setTransform(5.5,5.5,1.1,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF99CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_68.setTransform(5.5,5.5,1.1,1.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCCCC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_69.setTransform(5.5,5.5,1.1,1.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFCC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_70.setTransform(5.5,5.5,1.1,1.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF3399").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_71.setTransform(5.5,5.5,1.1,1.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF6699").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_72.setTransform(5.5,5.5,1.1,1.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF9999").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_73.setTransform(5.5,5.5,1.1,1.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFCC99").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_74.setTransform(5.5,5.5,1.1,1.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFF99").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_75.setTransform(5.5,5.5,1.1,1.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF3366").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_76.setTransform(5.5,5.5,1.1,1.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF6666").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_77.setTransform(5.5,5.5,1.1,1.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF9966").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_78.setTransform(5.5,5.5,1.1,1.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCC66").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_79.setTransform(5.5,5.5,1.1,1.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFF66").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_80.setTransform(5.5,5.5,1.1,1.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0033").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_81.setTransform(5.5,5.5,1.1,1.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF3333").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_82.setTransform(5.5,5.5,1.1,1.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CC66CC").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_83.setTransform(5.5,5.5,1.1,1.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CCCCFF").s().p("AgxAxIAAhiIBiAAIAABig");
	this.shape_84.setTransform(5.5,5.5,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_56}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11,11);


(lib.HEART04 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,43,153,0.902)").s().p("AgxGQIAAhkIhkAAIAAhkIhkAAIAAjIIhkAAIAAmPIEsAAIAABkIBjAAIAAhkIEsAAIAAGPIhkAAIAADIIhkAAIAABkIhkAAIAABkg");
	this.shape.setTransform(45,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,204,203,0.902)").s().p("AgxHzIAAhjIBjAAIAABjgAAyGQIAAhkIBkAAIAABkgAiVGQIAAhkIhkAAIAAhkIhkAAIAAjIIhkAAIAAmPIBkAAIAAGPIBkAAIAADIIBkAAIAABkIBkAAIAABkgACWEsIAAhkIBkAAIAABkgACWEsgAD6DIIAAjIIBkAAIAADIgAFeAAIAAmPIBkAAIAAGPgAgxkrIAAhkIksAAIAAhkIEsAAIAABkIBjAAIAAhkIEsAAIAABkIksAAIAABkgAldmPg");
	this.shape_1.setTransform(45,50);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,100);


(lib.HEART03 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,43,153,0.902)").s().p("AgxEsIAAjIIhkAAIAAjHIhkAAIAAjIIDIAAIAABkIBiAAIAAhkIDJAAIAADIIhkAAIAADHIhlAAIAADIg");
	this.shape.setTransform(35,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,204,203,0.902)").s().p("AgxGQIAAhkIhkAAIAAjIIhkAAIAAjHIBkAAIAADHIBkAAIAADIIBiAAIAABkgAAxEsIAAjIIBlAAIAADIgACWBkIAAjHIBkAAIAADHgACWBkgAD6hjIAAjIIjJAAIAAhkIDJAAIAABkIBkAAIAADIgAD6hjgAldhjIAAjIIBkAAIAADIgAgxjHIAAhkIjIAAIAAhkIDIAAIAABkIBiAAIAABkgAj5krg");
	this.shape_1.setTransform(35,40);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.HEART02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,43,153,0.902)").s().p("AgwK8IAAhkIhkAAIAAhlIhkAAIAAhkIhlAAIAAhkIhkAAIAAjHIhkAAIAAjGIhkAAIAAmRIBkAAIAAhkIBkAAIAAhkIEtAAIAABkIBkAAIAABkIBiAAIAAhkIBkAAIAAhkIErAAIAABkIBkAAIAABkIBlAAIAAGRIhlAAIAADGIhkAAIAADHIhkAAIAABkIhkAAIAABkIhjAAIAABlIhkAAIAABkg");
	this.shape.setTransform(75,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,204,203,0.902)").s().p("AgwMgIAAhkIhkAAIAAhkIhkAAIAAhlIhlAAIAAhkIhkAAIAAhkIhkAAIAAjHIhkAAIAAjGIBkAAIAADGIBkAAIAADHIBkAAIAABkIBlAAIAABkIBkAAIAABlIBkAAIAABkIBiAAIAABkgAAyK8IAAhkIBkAAIAABkgACWJYIAAhlIBjAAIAABlgAD5HzIAAhkIBkAAIAABkgAD5HzgAFdGPIAAhkIBkAAIAAjHIBkAAIAAjGIBlAAIAADGIhlAAIAADHIhkAAIAABkgAKKhiIAAmRIhlAAIAAhkIBlAAIAABkIBkAAIAAGRgArthiIAAmRIBkAAIAAGRgAgwnzIAAhkIhkAAIAAhkIBkAAIAABkIBiAAIAAhkIBkAAIAABkIhkAAIAABkgAqJnzIAAhkIBkAAIAABkgAHBpXIAAhkIBkAAIAABkgAolpXIAAhkIBkAAIAABkgAolpXgACWq7IAAhkIErAAIAABkgAnBq7IAAhkIEtAAIAABkgAnBq7g");
	this.shape_1.setTransform(75,80);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150,160);


(lib.HEART01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,43,153,0.902)").s().p("AgxUUIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhlIhjAAIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAjHIhlAAIAAhkIhkAAIAAjIIhkAAIAAkrIhkAAIAAmPIBkAAIAAktIBkAAIAAhkIBkAAIAAhkIDJAAIAAhkIErAAIAABkIDIAAIAABkIBkAAIAABkIBkAAIAADJIBjAAIAAjJIBkAAIAAhkIBkAAIAAhkIDIAAIAAhkIErAAIAABkIDJAAIAABkIBkAAIAABkIBkAAIAAEtIBkAAIAAGPIhkAAIAAErIhkAAIAADIIhkAAIAABkIhlAAIAADHIhkAAIAABkIhkAAIAABkIhkAAIAABkIhjAAIAABlIhkAAIAABkIhkAAIAABkIhkAAIAABkIhkAAIAABkg");
	this.shape.setTransform(135,140);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,204,203,0.902)").s().p("AgxV3IAAhjIBjAAIAABjgAAyUUIAAhkIBkAAIAABkgAAyUUgAiVUUIAAhkIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhjAAIAAhlIhkAAIAAhkIhkAAIAAhkIhkAAIAAhkIhlAAIAAjHIhkAAIAAhkIhkAAIAAjIIhkAAIAAkrIhkAAIAAmPIBkAAIAAGPIBkAAIAAErIBkAAIAADIIBkAAIAABkIBlAAIAADHIBkAAIAABkIBkAAIAABkIBkAAIAABkIBjAAIAABlIBkAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAABkgACWSwIAAhkIBkAAIAABkgACWSwgAD6RMIAAhkIBkAAIAABkgAFePoIAAhkIBkAAIAABkgAFePogAHCOEIAAhlIBjAAIAABlgAHCOEgAIlMfIAAhkIBkAAIAABkgAKJK7IAAhkIBkAAIAABkgAKJK7gALtJXIAAhkIBkAAIAAjHIBlAAIAADHIhlAAIAABkgALtJXgAO2EsIAAhkIBkAAIAABkgAQaDIIAAjIIBkAAIAADIgAQaDIgAR+AAIAAkrIBkAAIAAErgATikrIAAmPIBkAAIAAGPgATikrgAR+q6IAAktIhkAAIAAhkIhkAAIAAhkIjJAAIAAhkIDJAAIAABkIBkAAIAABkIBkAAIAABkIBkAAIAAEtgAzhq6IAAktIBkAAIAAEtgAgxseIAAjJIhkAAIAAhkIhkAAIAAhkIjIAAIAAhkIDIAAIAABkIBkAAIAABkIBkAAIAABkIBjAAIAADJgAAyvnIAAhkIBkAAIAABkgAAyvngAx9vnIAAhkIBkAAIAABkgAx9vngACWxLIAAhkIBkAAIAABkgACWxLgAwZxLIAAhkIBkAAIAABkgAwZxLgAD6yvIAAhkIDIAAIAAhkIErAAIAABkIkrAAIAABkgAD6yvgAu1yvIAAhkIDJAAIAABkgAu1yvgArs0TIAAhkIErAAIAABkgArs0Tg");
	this.shape_1.setTransform(135,140);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,270,280);


(lib.BEMINE = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCCCC").s().p("A4MTiIAAhkIhlAAIAAktIBlAAIAAhkIBkAAIAABkIBkAAIAABkIhkAAIAAhkIhkAAIAAEtIEsAAIAABkgAzgR+IAAuEIhkAAIAAhkIBkAAIAAnzIhkAAIAAhjIErAAIAABjIhkAAIAAXbgEAvqAHCIAAhkIBkAAIAApXIhkAAIAAhkIBkAAIAABkIBkAAIAAK7gEAmSAHCIAAhkIBjAAIAAnzIhjAAIAAhkIErAAIAABkIhkAAIAAHzIBkAAIAAhkIBkAAIAApXIhkAAIAAhjIDJAAIAADHIBkAAIAABkIhkAAIAAHzIjJAAIAABkgAZxHCIAAhkIBkAAIAAktIBkAAIAAEtIBkAAIAABkgAVGHCIAAhkIBkAAIAAq7IhkAAIAAhjIDIAAIAADHIBjAAIAABkIhjAAIAAJXgEA15AFeIAAhkIDIAAIAABkgEAhmAFeIAAhkIhkAAIAAxLIktAAIAAhkIEtAAIAAksIBkAAIAAEsIEsAAIAABkIksAAIAARLIDIAAIAABkgAQZFeIAAhkIDJAAIAABkgAKKFeIAA0TIhkAAIAAhkIDHAAIAAUTIBkAAIAABkgAHCFeIAAhkIhkAAIAAjJIktAAIAADJIEtAAIAABkIktAAIAAhkIhiAAIAAjJIBiAAIAAhiIEtAAIAAnzIktAAIAAhkIEtAAIAABkIBkAAIAAMeIBkAAIAABkgAnAFeIAAktIhkAAIAApVIjJAAIAAhkIGRAAIAABkIhkAAIAAJVIBkAAIAAmOIBjAAIAAGOIhjAAIAAEtgA2oFeIAAhkIhkAAIAAnzIhlAAIAAhkIDJAAIAAJXIBkAAIAABkgA85FeIAAq7IhkAAIAAK7IhkAAIAAq7IBkAAIAAhjIDIAAIAAK6IBkAAIAABkgEgmQAFeIAAhkIBkAAIAAnzIhkAAIAAhkIDIAAIAAJXIBkAAIAABkgEgvoAFeIAAhkIhkAAIAAhkIhkAAIAApWIBkAAIAAErIDHAAIAAmPIBkAAIAAHzIkrAAIAADHIBkAAIAABkIDHAAIAABkgEg/QAFeIAAhkIBkAAIAAyvIhkAAIAAhkIGPAAIAABkIjIAAIAAH1IDIAAIAAhkIBkAAIAABkIhkAAIAABjIjIAAIAAJXIGQAAIAABkgEA8KAD6IAAjJIDIAAIAADJgEA5BAD6IAAhkIhkAAIAAhlIDIAAIAADJgEA0WAD6IAAq6IBjAAIAAErIDIAAIAAmPIBkAAIAAHzIksAAIAAErgEAkuAD6IAAkrIhkAAIAAhkIDIAAIAAGPgATiD6IAAhkIhkAAIAAhlIDIAAIAADJgAO1D6IAAhkIBkAAIAABkgAFeD6gEgshAD6IAAhkIhkAAIAAhlIDIAAIAADJgEg15AD6IAAnzIjIAAIAAhkIDIAAIAABkIBlAAIAAHzgEg15AD6gANRCWIAApWIBkAAIAAErIDJAAIAAmPIhlAAIAAhkIBlAAIAABkIBkAAIAAHzIktAAIAADHgAc5AxIAAmOIBkAAIAAGOgEA9ugAxIAAxMIBkAAIAARMgEAmSgCVgAZxj5IAAhkIBkAAIAABkgAZxj5gAAxj5IAAhkIhiAAIAAjHIBiAAIAADHIBkAAIAABkgEAn1gFdIAAhjIBkAAIAABjgAbVldIAAhjIBkAAIAABjgAbVldgAj5ldIAAkrIBkAAIAAErgEgjIgFdIAAhjIDHAAIAABjgEgjIgFdgEA15gHAIAAhkIBkAAIAABkgEA15gHAgAO1nAIAAhkIBkAAIAABkgEgxMgHAIAAhkIBkAAIAABkgEgxMgHAgEA3dgIkIAAhkIBkAAIAABkgAAxokgEgvogIkIAAhkIBjAAIAABkgEgvogIkgEg3dgIkIAAktIhkAAIAAhkIBkAAIAABkIBkAAIAAEtgAiVqIIAAjJIhkAAIAAhkIEqAAIAABkIhiAAIAADJgAiVqIg");
	this.shape.setTransform(415,135);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3399").s().p("A5wVGIAAhkIhkAAIAAn1IBkAAIAAhkIErAAIAAjHIyvAAIAAksIBkAAIAAkrIhkAAIAAksIDHAAIAAhjIK9AAIAABjIDHAAIAAhjIH1AAIAAErIhlAAIAAXbIhkAAIAABkgEAuGAIlIAAhjIhkAAIAABjIn1AAIAAhjIkrAAIAABjIsgAAIAAhjI0SAAIAAhkIhlAAIAAjIIhkAAIAAEsIksAAIAAksIhjAAIAApXIjIAAIAAkrIHzAAIAAktIHzAAIAAEtIErAAIAABkIBkAAIAAjIIhkAAIAAktIGRAAIAAH1IBkAAIAAhkIEsAAIAABkIBjAAIAABkIJZAAIAAjIIktAAIAAktIEtAAIAAksIErAAIAAEsIEsAAIAAEtIksAAIAAHzIBkAAIAAhkIBkAAIAAjHIJZAAIAABjIDHAAIAAhjIBkAAIAAhkIBkAAIAAhkIEtAAIAABkIBkAAIAApZIErAAIAAY/ImPAAIAABkImRAAIAABjgAiVgxIBlAAIAAjIIhlAAgEAn1gFdIBlAAIAAhkIhlAAgEgxNAHCIAAhkIjHAAIAABkIshAAIAAksIBkAAIAAvmIhkAAIAAktIJZAAIAABkIBkAAIAABkIBkAAIAAGRIBjAAIAAhkIBkAAIAAhkIEsAAIAABkIBlAAIAAJXIBkAAIAAGPIhkAAIAABkgEg6lACWIDJAAIAAkrIjJAAgEg6lgKIIBlAAIAAhkIhlAAg");
	this.shape_1.setTransform(415,135);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,830,270);


// stage content:
(lib.kickstartit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var num_stageWidth = 960;
		var num_stageHeight = 640;
		
		stage.enableMouseOver(20);
		
		var font_fixedsys = document.createElement("style");
		font_fixedsys.appendChild(document.createTextNode("\
		@font-face {\
		    font-family: '" + 'fixedsys_excelsior_3' + "';\
			src: url('" + 'fontquirrels/fsex300-webfont.eot?#iefix' + "') format('embedded-opentype'),\
				 url('" + 'fontquirrels/fsex300-webfont.woff' + "') format('woff'),\
			     url('" + 'fontquirrels/fsex300-webfont.ttf' + "') format('truetype'),\
				 url('" + 'fontquirrels/fsex300-webfont.svg#fixedsys_excelsior_3.01Rg' + "') format('svg');\
			font-weight: normal;\
			font-style: normal;\
		}\
		"));
		
		document.head.appendChild(font_fixedsys);
		
		//text field properties
		txtCol = "#FFCCCB";//the text color
		txtColBack = "#000000";//#FF2B99
		txtFont = "50px 'fixedsys_excelsior_3', 'Lucida Console', Monaco, monospace";
		txtFontBack = "50px 'fixedsys_excelsior_3', 'Lucida Console', Monaco, monospace";
		
		//
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		
		function onResize()
		{
			var widthToHeight = stageWidth / stageHeight;
			var newWidth = window.innerWidth;
			var newHeight = window.innerHeight;
			var newWidthToHeight = newWidth / newHeight;
			//
			if (newWidthToHeight > widthToHeight)
			{
				newWidth = newHeight * widthToHeight;
				page_canvas.style.height = newHeight + "px";
				page_canvas.style.width = newWidth + "px";
			} else {
				newHeight = newWidth / widthToHeight;
				page_canvas.style.height = newHeight + "px";
				page_canvas.style.width = newWidth + "px";
			}
				scale = newWidthToHeight / widthToHeight;
				stage.width = newWidth;
				stage.height = newHeight;
				page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
				page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
			/*
				page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
				page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
			*/
			//
		}
		//
		window.onresize = function()
		{
		     onResize();
		}
		//call on first run
		onResize();
		
		//txt_output2.shadow = new createjs.Shadow(txtColBack, 0, 0, 5);
		
		//Kick-start your relationship!
		
		
		
		//first sentence structure
		//I fantasize about getting stuck in _____ with you
		var arr_str01 = new Array("many places", "many places", "a deserted shipyard (there's a reasonable backstory)", "an elevator", "an elevator", "an elevator", "a small elevator", "a small elevator", "a marital dispute", "a custody dispute", "a shoe closet", "a shoe closet", "a maintenance closet", "a maintenance closet", "a warm dark place", "my warm dark place", "a nice place", "my happy place", "a custody battle", "financial debt", "a marriage as an institution", "an argument about my future unwillingness to have kids", "a perfectly imperfect relationship", "a healthily maintained relationship");
		var str_01 = "I fantasize about getting stuck in"; //add: "with you..." at the end
		
		/*
		You are _____
		You are so ____
		You look _____ 
		Because you're so ____
		*/
		var arr_str02_01 = new Array("You are", "You are so", "You look", "Because you're so");
		var arr_str02_02 = new Array("healthy", "pretty", "adequate", "good", "acceptable", "excellent", "favorable", "great", "satisfactory", "valuable", "ok", "choice", "nice", "pleasing", "prime", "spanking", "worthy", "agreeable", "commendable", "gratifying", "select", "shipshape", "healthful", "fed", "robust", "strong", "able-bodied", "all right", "bright-eyed", "firm", "hardy", "husky", "lusty", "stout", "sturdy", "muscular in all the right places", "sound", "trim", "unimpaired", "whole", "acceptable", "capable", "competent", "decent", "satisfactory", "sufficient", "suitable", "tolerable", "tolerable", "equal", "all right", "comfortable", "passable", "commensurate", "sufficing", "unobjectionable", "easy", "apt", "dexterous", "effortless", "equipped", "equipped", "intelligent", "ready", "worthy", "biologically blessed", "likely to say 'yes'");
		
		/*
		Generic comments to go before "be my valentine"
		*/
		var arr_str03 = new Array("You look great...", "You look great.", "We could have a healthy relationship,", "We could have a healthy relationship,", "I'm heterosexual for you...","I'm not creepy...","You are my happy place...","You're all I can think about. This is not a dysfunctional person asking this...","If I asked in French would you say yes? I don't speak French, please...","I am making full eye contact as I say this,","You're the only one. Really!","You bring light to my life, you're that shiny. I like shiny.","You're so normal compared to that last person I dated.","You look nice.","I like your hair.","You smell nice.","I like your choice in friends, you're so brave, so...","I like you a lot and stuff, so...","I love you in a not-creepy way, so...","You're a great person, so...","You have a big heart, so...","I love your carefree attitude toward sex, so...","I'm so jealous of your fabulous hair, so...","I love your love for love. Love with me...","Please, love with me...","Will you be my future ex?","You could be my future ex, so...","You're pretty for a human, so...","Maybe we could have babies, so...","You're a nice person, so...","You're all I can think about, so...","How are you still single?","Lets have sex!","Take a chance with me...","This is not a threat...","This is not a joke...","You! You'll do,","You're pretty for a person,","Say yes,");
		
		//end
		var str_end = "Be my Valentine!";
		var str_return = "";
		//
		
		var str_v01 = str_01+" "+arr_str01[Math.ceil(Math.random()*arr_str01.length)-1]+" with you...";
		
		
		var str_v02 = arr_str02_01[Math.ceil(Math.random()*arr_str02_01.length)-1]+" "+arr_str02_02[Math.ceil(Math.random()*arr_str02_02.length)-1]+"...";
		
		
		var str_v03 = arr_str03[Math.ceil(Math.random()*arr_str03.length)-1];
		
		
		var randNum = Math.random()*150;
		
		if(randNum < 33){
			//trace("1: "+str_v01);
			str_return = str_v01;// + "\n" + str_end;
		} else if(randNum < 66){
			//trace("2: "+str_v02);
			str_return = str_v02;// + "\n" + str_end;
		} else if(randNum < 133){
			//trace("3: "+str_v03);
			str_return = str_v03;// + "\n" + str_end;
		}else{
			str_return = str_v02;// + "\n" + str_end;
		}
		
		str_return = "''"+str_return+"''";
		
		//HEARTS
		
		var mc_heart01 = new lib.HEART01();
		stage.addChild(mc_heart01);
		var mc_heart02 = new lib.HEART02();
		stage.addChild(mc_heart02);
		var mc_heart03 = new lib.HEART03();
		stage.addChild(mc_heart03);
		var mc_heart04 = new lib.HEART04();
		stage.addChild(mc_heart04);
		//
		mc_heart01.mouseEnabled = false;
		mc_heart02.mouseEnabled = false;
		mc_heart03.mouseEnabled = false;
		mc_heart04.mouseEnabled = false;
		
		function placeHeart(){
			mc_heart01.x = Math.ceil(Math.random()*num_stageWidth);
			mc_heart01.y = Math.ceil(Math.random()*num_stageHeight);
			mc_heart02.x = Math.ceil(Math.random()*num_stageWidth);
			mc_heart02.y = Math.ceil(Math.random()*num_stageHeight);
			mc_heart03.x = Math.ceil(Math.random()*num_stageWidth);
			mc_heart03.y = Math.ceil(Math.random()*num_stageHeight);
			mc_heart04.x = Math.ceil(Math.random()*num_stageWidth);
			mc_heart04.y = Math.ceil(Math.random()*num_stageHeight);
		}
		
		placeHeart();
		
		stage.addEventListener("mouseover", function() {
			if(Math.random()*100 > 90){
				placeHeart();
			}
		});
		
		
		//THE OUTLINE (SO SORRY, BUT THIS SEEMS TO BE THE ONLY WAY OF DOING THIS :( )
		txt_output2 = new createjs.Text(str_return, txtFont, txtColBack);
		txt_output2.textAlign = "center";
		txt_output2.x = Math.ceil(num_stageWidth/2);
		txt_output2.y = 26;
		txt_output2.lineWidth = 930;
		txt_output2.lineHeight = 50;
		stage.addChild(txt_output2);
		//
		txt_output3 = new createjs.Text(str_return, txtFont, txtColBack);
		txt_output3.textAlign = "center";
		txt_output3.x = Math.ceil(num_stageWidth/2)-2;
		txt_output3.y = 26;
		txt_output3.lineWidth = 930;
		txt_output3.lineHeight = 50;
		stage.addChild(txt_output3);
		//
		txt_output4 = new createjs.Text(str_return, txtFont, txtColBack);
		txt_output4.textAlign = "center";
		txt_output4.x = Math.ceil(num_stageWidth/2)-2;
		txt_output4.y = 23;
		txt_output4.lineWidth = 930;
		txt_output4.lineHeight = 50;
		stage.addChild(txt_output4);
		//
		txt_output5 = new createjs.Text(str_return, txtFont, txtColBack);
		txt_output5.textAlign = "center";
		txt_output5.x = Math.ceil(num_stageWidth/2)-2;
		txt_output5.y = 21;
		txt_output5.lineWidth = 930;
		txt_output5.lineHeight = 50;
		stage.addChild(txt_output5)
		//
		txt_output6 = new createjs.Text(str_return, txtFont, txtColBack);
		txt_output6.textAlign = "center";
		txt_output6.x = Math.ceil(num_stageWidth/2)+4;
		txt_output6.y = 21;
		txt_output6.lineWidth = 930;
		txt_output6.lineHeight = 50;
		stage.addChild(txt_output6)
		//
		txt_output7 = new createjs.Text(str_return, txtFont, txtColBack);
		txt_output7.textAlign = "center";
		txt_output7.x = Math.ceil(num_stageWidth/2)+4;
		txt_output7.y = 26;
		txt_output7.lineWidth = 930;
		txt_output7.lineHeight = 50;
		stage.addChild(txt_output7)
		//
		txt_output8 = new createjs.Text(str_return, txtFont, txtColBack);
		txt_output8.textAlign = "center";
		txt_output8.x = Math.ceil(num_stageWidth/2)+4;
		txt_output8.y = 24;
		txt_output8.lineWidth = 930;
		txt_output8.lineHeight = 50;
		stage.addChild(txt_output8)
		//
		//THE TEXT FIELD
		txt_output = new createjs.Text(str_return, txtFont, txtCol);
		txt_output.textAlign = "center";
		txt_output.x = Math.ceil(num_stageWidth/2);
		txt_output.y = 23;
		txt_output.lineWidth = 930;
		txt_output.lineHeight = 50;
		stage.addChild(txt_output);
		//
		
		var mc_bemine = new lib.BEMINE()
		stage.addChild(mc_bemine);
		mc_bemine.x = 60;
		mc_bemine.y = 350;
		
		//test();
		
		stage.addEventListener("click", function() {
			//save_canvas();
			window.alert("Right click and save image as.");
			//
			var w=window.open('about:blank','image saved from canvas');
			w.document.write("<img src='"+canvas.toDataURL("image/png")+"' alt='image saved from canvas'/>");	
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// BE MY VALIENTINE
	this.instance = new lib.BEMINE();
	this.instance.setTransform(475,828.1,1,1,0,0,0,415,135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// HEARTS
	this.mc_heart04 = new lib.HEART04();
	this.mc_heart04.setTransform(645,-225,1,1,0,0,0,45,50);

	this.mc_heart03 = new lib.HEART03();
	this.mc_heart03.setTransform(835,-135,1,1,0,0,0,35,40);

	this.mc_heart02 = new lib.HEART02();
	this.mc_heart02.setTransform(295,-135,1,1,0,0,0,75,80);

	this.instance_1 = new lib.HEART01();
	this.instance_1.setTransform(475,-185,1,1,0,0,0,135,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.mc_heart02},{t:this.mc_heart03},{t:this.mc_heart04}]}).wait(1));

	// BACKGROUND
	this.mc_pixel_tile = new lib.TILE_PIXEL();
	this.mc_pixel_tile.setTransform(940,620,2,2);

	this.mc_pixel_tile_1 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1.setTransform(920,620,2,2);

	this.mc_pixel_tile_2 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_2.setTransform(900,620,2,2);

	this.mc_pixel_tile_3 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_3.setTransform(880,620,2,2);

	this.mc_pixel_tile_4 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_4.setTransform(860,620,2,2);

	this.mc_pixel_tile_5 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_5.setTransform(840,620,2,2);

	this.mc_pixel_tile_6 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_6.setTransform(820,620,2,2);

	this.mc_pixel_tile_7 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_7.setTransform(800,620,2,2);

	this.mc_pixel_tile_8 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_8.setTransform(780,620,2,2);

	this.mc_pixel_tile_9 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_9.setTransform(760,620,2,2);

	this.mc_pixel_tile_10 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_10.setTransform(740,620,2,2);

	this.mc_pixel_tile_11 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_11.setTransform(720,620,2,2);

	this.mc_pixel_tile_12 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_12.setTransform(700,620,2,2);

	this.mc_pixel_tile_13 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_13.setTransform(680,620,2,2);

	this.mc_pixel_tile_14 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_14.setTransform(660,620,2,2);

	this.mc_pixel_tile_15 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_15.setTransform(640,620,2,2);

	this.mc_pixel_tile_16 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_16.setTransform(620,620,2,2);

	this.mc_pixel_tile_17 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_17.setTransform(600,620,2,2);

	this.mc_pixel_tile_18 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_18.setTransform(580,620,2,2);

	this.mc_pixel_tile_19 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_19.setTransform(560,620,2,2);

	this.mc_pixel_tile_20 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_20.setTransform(540,620,2,2);

	this.mc_pixel_tile_21 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_21.setTransform(520,620,2,2);

	this.mc_pixel_tile_22 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_22.setTransform(500,620,2,2);

	this.mc_pixel_tile_23 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_23.setTransform(480,620,2,2);

	this.mc_pixel_tile_24 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_24.setTransform(460,620,2,2);

	this.mc_pixel_tile_25 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_25.setTransform(440,620,2,2);

	this.mc_pixel_tile_26 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_26.setTransform(420,620,2,2);

	this.mc_pixel_tile_27 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_27.setTransform(400,620,2,2);

	this.mc_pixel_tile_28 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_28.setTransform(380,620,2,2);

	this.mc_pixel_tile_29 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_29.setTransform(360,620,2,2);

	this.mc_pixel_tile_30 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_30.setTransform(340,620,2,2);

	this.mc_pixel_tile_31 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_31.setTransform(320,620,2,2);

	this.mc_pixel_tile_32 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_32.setTransform(300,620,2,2);

	this.mc_pixel_tile_33 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_33.setTransform(280,620,2,2);

	this.mc_pixel_tile_34 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_34.setTransform(260,620,2,2);

	this.mc_pixel_tile_35 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_35.setTransform(240,620,2,2);

	this.mc_pixel_tile_36 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_36.setTransform(220,620,2,2);

	this.mc_pixel_tile_37 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_37.setTransform(200,620,2,2);

	this.mc_pixel_tile_38 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_38.setTransform(180,620,2,2);

	this.mc_pixel_tile_39 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_39.setTransform(160,620,2,2);

	this.mc_pixel_tile_40 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_40.setTransform(140,620,2,2);

	this.mc_pixel_tile_41 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_41.setTransform(120,620,2,2);

	this.mc_pixel_tile_42 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_42.setTransform(100,620,2,2);

	this.mc_pixel_tile_43 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_43.setTransform(80,620,2,2);

	this.mc_pixel_tile_44 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_44.setTransform(60,620,2,2);

	this.mc_pixel_tile_45 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_45.setTransform(40,620,2,2);

	this.mc_pixel_tile_46 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_46.setTransform(20,620,2,2);

	this.mc_pixel_tile_47 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_47.setTransform(0,620,2,2);

	this.mc_pixel_tile_48 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_48.setTransform(940,600,2,2);

	this.mc_pixel_tile_49 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_49.setTransform(920,600,2,2);

	this.mc_pixel_tile_50 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_50.setTransform(900,600,2,2);

	this.mc_pixel_tile_51 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_51.setTransform(880,600,2,2);

	this.mc_pixel_tile_52 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_52.setTransform(860,600,2,2);

	this.mc_pixel_tile_53 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_53.setTransform(840,600,2,2);

	this.mc_pixel_tile_54 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_54.setTransform(820,600,2,2);

	this.mc_pixel_tile_55 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_55.setTransform(800,600,2,2);

	this.mc_pixel_tile_56 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_56.setTransform(780,600,2,2);

	this.mc_pixel_tile_57 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_57.setTransform(760,600,2,2);

	this.mc_pixel_tile_58 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_58.setTransform(740,600,2,2);

	this.mc_pixel_tile_59 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_59.setTransform(720,600,2,2);

	this.mc_pixel_tile_60 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_60.setTransform(700,600,2,2);

	this.mc_pixel_tile_61 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_61.setTransform(680,600,2,2);

	this.mc_pixel_tile_62 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_62.setTransform(660,600,2,2);

	this.mc_pixel_tile_63 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_63.setTransform(640,600,2,2);

	this.mc_pixel_tile_64 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_64.setTransform(620,600,2,2);

	this.mc_pixel_tile_65 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_65.setTransform(600,600,2,2);

	this.mc_pixel_tile_66 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_66.setTransform(580,600,2,2);

	this.mc_pixel_tile_67 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_67.setTransform(560,600,2,2);

	this.mc_pixel_tile_68 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_68.setTransform(540,600,2,2);

	this.mc_pixel_tile_69 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_69.setTransform(520,600,2,2);

	this.mc_pixel_tile_70 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_70.setTransform(500,600,2,2);

	this.mc_pixel_tile_71 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_71.setTransform(480,600,2,2);

	this.mc_pixel_tile_72 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_72.setTransform(460,600,2,2);

	this.mc_pixel_tile_73 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_73.setTransform(440,600,2,2);

	this.mc_pixel_tile_74 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_74.setTransform(420,600,2,2);

	this.mc_pixel_tile_75 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_75.setTransform(400,600,2,2);

	this.mc_pixel_tile_76 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_76.setTransform(380,600,2,2);

	this.mc_pixel_tile_77 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_77.setTransform(360,600,2,2);

	this.mc_pixel_tile_78 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_78.setTransform(340,600,2,2);

	this.mc_pixel_tile_79 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_79.setTransform(320,600,2,2);

	this.mc_pixel_tile_80 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_80.setTransform(300,600,2,2);

	this.mc_pixel_tile_81 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_81.setTransform(280,600,2,2);

	this.mc_pixel_tile_82 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_82.setTransform(260,600,2,2);

	this.mc_pixel_tile_83 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_83.setTransform(240,600,2,2);

	this.mc_pixel_tile_84 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_84.setTransform(220,600,2,2);

	this.mc_pixel_tile_85 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_85.setTransform(200,600,2,2);

	this.mc_pixel_tile_86 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_86.setTransform(180,600,2,2);

	this.mc_pixel_tile_87 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_87.setTransform(160,600,2,2);

	this.mc_pixel_tile_88 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_88.setTransform(140,600,2,2);

	this.mc_pixel_tile_89 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_89.setTransform(120,600,2,2);

	this.mc_pixel_tile_90 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_90.setTransform(100,600,2,2);

	this.mc_pixel_tile_91 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_91.setTransform(80,600,2,2);

	this.mc_pixel_tile_92 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_92.setTransform(60,600,2,2);

	this.mc_pixel_tile_93 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_93.setTransform(40,600,2,2);

	this.mc_pixel_tile_94 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_94.setTransform(20,600,2,2);

	this.mc_pixel_tile_95 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_95.setTransform(0,600,2,2);

	this.mc_pixel_tile_96 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_96.setTransform(940,580,2,2);

	this.mc_pixel_tile_97 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_97.setTransform(920,580,2,2);

	this.mc_pixel_tile_98 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_98.setTransform(900,580,2,2);

	this.mc_pixel_tile_99 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_99.setTransform(880,580,2,2);

	this.mc_pixel_tile_100 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_100.setTransform(860,580,2,2);

	this.mc_pixel_tile_101 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_101.setTransform(840,580,2,2);

	this.mc_pixel_tile_102 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_102.setTransform(820,580,2,2);

	this.mc_pixel_tile_103 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_103.setTransform(800,580,2,2);

	this.mc_pixel_tile_104 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_104.setTransform(780,580,2,2);

	this.mc_pixel_tile_105 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_105.setTransform(760,580,2,2);

	this.mc_pixel_tile_106 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_106.setTransform(740,580,2,2);

	this.mc_pixel_tile_107 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_107.setTransform(720,580,2,2);

	this.mc_pixel_tile_108 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_108.setTransform(700,580,2,2);

	this.mc_pixel_tile_109 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_109.setTransform(680,580,2,2);

	this.mc_pixel_tile_110 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_110.setTransform(660,580,2,2);

	this.mc_pixel_tile_111 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_111.setTransform(640,580,2,2);

	this.mc_pixel_tile_112 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_112.setTransform(620,580,2,2);

	this.mc_pixel_tile_113 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_113.setTransform(600,580,2,2);

	this.mc_pixel_tile_114 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_114.setTransform(580,580,2,2);

	this.mc_pixel_tile_115 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_115.setTransform(560,580,2,2);

	this.mc_pixel_tile_116 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_116.setTransform(540,580,2,2);

	this.mc_pixel_tile_117 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_117.setTransform(520,580,2,2);

	this.mc_pixel_tile_118 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_118.setTransform(500,580,2,2);

	this.mc_pixel_tile_119 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_119.setTransform(480,580,2,2);

	this.mc_pixel_tile_120 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_120.setTransform(460,580,2,2);

	this.mc_pixel_tile_121 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_121.setTransform(440,580,2,2);

	this.mc_pixel_tile_122 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_122.setTransform(420,580,2,2);

	this.mc_pixel_tile_123 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_123.setTransform(400,580,2,2);

	this.mc_pixel_tile_124 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_124.setTransform(380,580,2,2);

	this.mc_pixel_tile_125 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_125.setTransform(360,580,2,2);

	this.mc_pixel_tile_126 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_126.setTransform(340,580,2,2);

	this.mc_pixel_tile_127 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_127.setTransform(320,580,2,2);

	this.mc_pixel_tile_128 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_128.setTransform(300,580,2,2);

	this.mc_pixel_tile_129 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_129.setTransform(280,580,2,2);

	this.mc_pixel_tile_130 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_130.setTransform(260,580,2,2);

	this.mc_pixel_tile_131 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_131.setTransform(240,580,2,2);

	this.mc_pixel_tile_132 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_132.setTransform(220,580,2,2);

	this.mc_pixel_tile_133 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_133.setTransform(200,580,2,2);

	this.mc_pixel_tile_134 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_134.setTransform(180,580,2,2);

	this.mc_pixel_tile_135 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_135.setTransform(160,580,2,2);

	this.mc_pixel_tile_136 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_136.setTransform(140,580,2,2);

	this.mc_pixel_tile_137 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_137.setTransform(120,580,2,2);

	this.mc_pixel_tile_138 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_138.setTransform(100,580,2,2);

	this.mc_pixel_tile_139 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_139.setTransform(80,580,2,2);

	this.mc_pixel_tile_140 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_140.setTransform(60,580,2,2);

	this.mc_pixel_tile_141 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_141.setTransform(40,580,2,2);

	this.mc_pixel_tile_142 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_142.setTransform(20,580,2,2);

	this.mc_pixel_tile_143 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_143.setTransform(0,580,2,2);

	this.mc_pixel_tile_144 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_144.setTransform(940,560,2,2);

	this.mc_pixel_tile_145 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_145.setTransform(920,560,2,2);

	this.mc_pixel_tile_146 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_146.setTransform(900,560,2,2);

	this.mc_pixel_tile_147 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_147.setTransform(880,560,2,2);

	this.mc_pixel_tile_148 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_148.setTransform(860,560,2,2);

	this.mc_pixel_tile_149 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_149.setTransform(840,560,2,2);

	this.mc_pixel_tile_150 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_150.setTransform(820,560,2,2);

	this.mc_pixel_tile_151 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_151.setTransform(800,560,2,2);

	this.mc_pixel_tile_152 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_152.setTransform(780,560,2,2);

	this.mc_pixel_tile_153 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_153.setTransform(760,560,2,2);

	this.mc_pixel_tile_154 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_154.setTransform(740,560,2,2);

	this.mc_pixel_tile_155 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_155.setTransform(720,560,2,2);

	this.mc_pixel_tile_156 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_156.setTransform(700,560,2,2);

	this.mc_pixel_tile_157 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_157.setTransform(680,560,2,2);

	this.mc_pixel_tile_158 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_158.setTransform(660,560,2,2);

	this.mc_pixel_tile_159 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_159.setTransform(640,560,2,2);

	this.mc_pixel_tile_160 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_160.setTransform(620,560,2,2);

	this.mc_pixel_tile_161 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_161.setTransform(600,560,2,2);

	this.mc_pixel_tile_162 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_162.setTransform(580,560,2,2);

	this.mc_pixel_tile_163 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_163.setTransform(560,560,2,2);

	this.mc_pixel_tile_164 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_164.setTransform(540,560,2,2);

	this.mc_pixel_tile_165 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_165.setTransform(520,560,2,2);

	this.mc_pixel_tile_166 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_166.setTransform(500,560,2,2);

	this.mc_pixel_tile_167 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_167.setTransform(480,560,2,2);

	this.mc_pixel_tile_168 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_168.setTransform(460,560,2,2);

	this.mc_pixel_tile_169 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_169.setTransform(440,560,2,2);

	this.mc_pixel_tile_170 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_170.setTransform(420,560,2,2);

	this.mc_pixel_tile_171 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_171.setTransform(400,560,2,2);

	this.mc_pixel_tile_172 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_172.setTransform(380,560,2,2);

	this.mc_pixel_tile_173 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_173.setTransform(360,560,2,2);

	this.mc_pixel_tile_174 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_174.setTransform(340,560,2,2);

	this.mc_pixel_tile_175 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_175.setTransform(320,560,2,2);

	this.mc_pixel_tile_176 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_176.setTransform(300,560,2,2);

	this.mc_pixel_tile_177 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_177.setTransform(280,560,2,2);

	this.mc_pixel_tile_178 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_178.setTransform(260,560,2,2);

	this.mc_pixel_tile_179 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_179.setTransform(240,560,2,2);

	this.mc_pixel_tile_180 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_180.setTransform(220,560,2,2);

	this.mc_pixel_tile_181 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_181.setTransform(200,560,2,2);

	this.mc_pixel_tile_182 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_182.setTransform(180,560,2,2);

	this.mc_pixel_tile_183 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_183.setTransform(160,560,2,2);

	this.mc_pixel_tile_184 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_184.setTransform(140,560,2,2);

	this.mc_pixel_tile_185 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_185.setTransform(120,560,2,2);

	this.mc_pixel_tile_186 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_186.setTransform(100,560,2,2);

	this.mc_pixel_tile_187 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_187.setTransform(80,560,2,2);

	this.mc_pixel_tile_188 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_188.setTransform(60,560,2,2);

	this.mc_pixel_tile_189 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_189.setTransform(40,560,2,2);

	this.mc_pixel_tile_190 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_190.setTransform(20,560,2,2);

	this.mc_pixel_tile_191 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_191.setTransform(0,560,2,2);

	this.mc_pixel_tile_192 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_192.setTransform(940,540,2,2);

	this.mc_pixel_tile_193 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_193.setTransform(920,540,2,2);

	this.mc_pixel_tile_194 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_194.setTransform(900,540,2,2);

	this.mc_pixel_tile_195 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_195.setTransform(880,540,2,2);

	this.mc_pixel_tile_196 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_196.setTransform(860,540,2,2);

	this.mc_pixel_tile_197 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_197.setTransform(840,540,2,2);

	this.mc_pixel_tile_198 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_198.setTransform(820,540,2,2);

	this.mc_pixel_tile_199 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_199.setTransform(800,540,2,2);

	this.mc_pixel_tile_200 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_200.setTransform(780,540,2,2);

	this.mc_pixel_tile_201 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_201.setTransform(760,540,2,2);

	this.mc_pixel_tile_202 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_202.setTransform(740,540,2,2);

	this.mc_pixel_tile_203 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_203.setTransform(720,540,2,2);

	this.mc_pixel_tile_204 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_204.setTransform(700,540,2,2);

	this.mc_pixel_tile_205 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_205.setTransform(680,540,2,2);

	this.mc_pixel_tile_206 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_206.setTransform(660,540,2,2);

	this.mc_pixel_tile_207 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_207.setTransform(640,540,2,2);

	this.mc_pixel_tile_208 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_208.setTransform(620,540,2,2);

	this.mc_pixel_tile_209 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_209.setTransform(600,540,2,2);

	this.mc_pixel_tile_210 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_210.setTransform(580,540,2,2);

	this.mc_pixel_tile_211 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_211.setTransform(560,540,2,2);

	this.mc_pixel_tile_212 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_212.setTransform(540,540,2,2);

	this.mc_pixel_tile_213 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_213.setTransform(520,540,2,2);

	this.mc_pixel_tile_214 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_214.setTransform(500,540,2,2);

	this.mc_pixel_tile_215 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_215.setTransform(480,540,2,2);

	this.mc_pixel_tile_216 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_216.setTransform(460,540,2,2);

	this.mc_pixel_tile_217 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_217.setTransform(440,540,2,2);

	this.mc_pixel_tile_218 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_218.setTransform(420,540,2,2);

	this.mc_pixel_tile_219 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_219.setTransform(400,540,2,2);

	this.mc_pixel_tile_220 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_220.setTransform(380,540,2,2);

	this.mc_pixel_tile_221 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_221.setTransform(360,540,2,2);

	this.mc_pixel_tile_222 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_222.setTransform(340,540,2,2);

	this.mc_pixel_tile_223 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_223.setTransform(320,540,2,2);

	this.mc_pixel_tile_224 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_224.setTransform(300,540,2,2);

	this.mc_pixel_tile_225 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_225.setTransform(280,540,2,2);

	this.mc_pixel_tile_226 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_226.setTransform(260,540,2,2);

	this.mc_pixel_tile_227 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_227.setTransform(240,540,2,2);

	this.mc_pixel_tile_228 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_228.setTransform(220,540,2,2);

	this.mc_pixel_tile_229 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_229.setTransform(200,540,2,2);

	this.mc_pixel_tile_230 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_230.setTransform(180,540,2,2);

	this.mc_pixel_tile_231 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_231.setTransform(160,540,2,2);

	this.mc_pixel_tile_232 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_232.setTransform(140,540,2,2);

	this.mc_pixel_tile_233 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_233.setTransform(120,540,2,2);

	this.mc_pixel_tile_234 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_234.setTransform(100,540,2,2);

	this.mc_pixel_tile_235 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_235.setTransform(80,540,2,2);

	this.mc_pixel_tile_236 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_236.setTransform(60,540,2,2);

	this.mc_pixel_tile_237 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_237.setTransform(40,540,2,2);

	this.mc_pixel_tile_238 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_238.setTransform(20,540,2,2);

	this.mc_pixel_tile_239 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_239.setTransform(0,540,2,2);

	this.mc_pixel_tile_240 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_240.setTransform(940,520,2,2);

	this.mc_pixel_tile_241 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_241.setTransform(920,520,2,2);

	this.mc_pixel_tile_242 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_242.setTransform(900,520,2,2);

	this.mc_pixel_tile_243 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_243.setTransform(880,520,2,2);

	this.mc_pixel_tile_244 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_244.setTransform(860,520,2,2);

	this.mc_pixel_tile_245 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_245.setTransform(840,520,2,2);

	this.mc_pixel_tile_246 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_246.setTransform(820,520,2,2);

	this.mc_pixel_tile_247 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_247.setTransform(800,520,2,2);

	this.mc_pixel_tile_248 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_248.setTransform(780,520,2,2);

	this.mc_pixel_tile_249 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_249.setTransform(760,520,2,2);

	this.mc_pixel_tile_250 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_250.setTransform(740,520,2,2);

	this.mc_pixel_tile_251 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_251.setTransform(720,520,2,2);

	this.mc_pixel_tile_252 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_252.setTransform(700,520,2,2);

	this.mc_pixel_tile_253 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_253.setTransform(680,520,2,2);

	this.mc_pixel_tile_254 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_254.setTransform(660,520,2,2);

	this.mc_pixel_tile_255 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_255.setTransform(640,520,2,2);

	this.mc_pixel_tile_256 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_256.setTransform(620,520,2,2);

	this.mc_pixel_tile_257 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_257.setTransform(600,520,2,2);

	this.mc_pixel_tile_258 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_258.setTransform(580,520,2,2);

	this.mc_pixel_tile_259 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_259.setTransform(560,520,2,2);

	this.mc_pixel_tile_260 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_260.setTransform(540,520,2,2);

	this.mc_pixel_tile_261 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_261.setTransform(520,520,2,2);

	this.mc_pixel_tile_262 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_262.setTransform(500,520,2,2);

	this.mc_pixel_tile_263 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_263.setTransform(480,520,2,2);

	this.mc_pixel_tile_264 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_264.setTransform(460,520,2,2);

	this.mc_pixel_tile_265 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_265.setTransform(440,520,2,2);

	this.mc_pixel_tile_266 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_266.setTransform(420,520,2,2);

	this.mc_pixel_tile_267 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_267.setTransform(400,520,2,2);

	this.mc_pixel_tile_268 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_268.setTransform(380,520,2,2);

	this.mc_pixel_tile_269 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_269.setTransform(360,520,2,2);

	this.mc_pixel_tile_270 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_270.setTransform(340,520,2,2);

	this.mc_pixel_tile_271 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_271.setTransform(320,520,2,2);

	this.mc_pixel_tile_272 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_272.setTransform(300,520,2,2);

	this.mc_pixel_tile_273 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_273.setTransform(280,520,2,2);

	this.mc_pixel_tile_274 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_274.setTransform(260,520,2,2);

	this.mc_pixel_tile_275 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_275.setTransform(240,520,2,2);

	this.mc_pixel_tile_276 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_276.setTransform(220,520,2,2);

	this.mc_pixel_tile_277 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_277.setTransform(200,520,2,2);

	this.mc_pixel_tile_278 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_278.setTransform(180,520,2,2);

	this.mc_pixel_tile_279 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_279.setTransform(160,520,2,2);

	this.mc_pixel_tile_280 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_280.setTransform(140,520,2,2);

	this.mc_pixel_tile_281 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_281.setTransform(120,520,2,2);

	this.mc_pixel_tile_282 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_282.setTransform(100,520,2,2);

	this.mc_pixel_tile_283 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_283.setTransform(80,520,2,2);

	this.mc_pixel_tile_284 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_284.setTransform(60,520,2,2);

	this.mc_pixel_tile_285 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_285.setTransform(40,520,2,2);

	this.mc_pixel_tile_286 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_286.setTransform(20,520,2,2);

	this.mc_pixel_tile_287 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_287.setTransform(0,520,2,2);

	this.mc_pixel_tile_288 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_288.setTransform(940,500,2,2);

	this.mc_pixel_tile_289 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_289.setTransform(920,500,2,2);

	this.mc_pixel_tile_290 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_290.setTransform(900,500,2,2);

	this.mc_pixel_tile_291 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_291.setTransform(880,500,2,2);

	this.mc_pixel_tile_292 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_292.setTransform(860,500,2,2);

	this.mc_pixel_tile_293 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_293.setTransform(840,500,2,2);

	this.mc_pixel_tile_294 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_294.setTransform(820,500,2,2);

	this.mc_pixel_tile_295 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_295.setTransform(800,500,2,2);

	this.mc_pixel_tile_296 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_296.setTransform(780,500,2,2);

	this.mc_pixel_tile_297 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_297.setTransform(760,500,2,2);

	this.mc_pixel_tile_298 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_298.setTransform(740,500,2,2);

	this.mc_pixel_tile_299 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_299.setTransform(720,500,2,2);

	this.mc_pixel_tile_300 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_300.setTransform(700,500,2,2);

	this.mc_pixel_tile_301 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_301.setTransform(680,500,2,2);

	this.mc_pixel_tile_302 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_302.setTransform(660,500,2,2);

	this.mc_pixel_tile_303 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_303.setTransform(640,500,2,2);

	this.mc_pixel_tile_304 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_304.setTransform(620,500,2,2);

	this.mc_pixel_tile_305 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_305.setTransform(600,500,2,2);

	this.mc_pixel_tile_306 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_306.setTransform(580,500,2,2);

	this.mc_pixel_tile_307 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_307.setTransform(560,500,2,2);

	this.mc_pixel_tile_308 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_308.setTransform(540,500,2,2);

	this.mc_pixel_tile_309 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_309.setTransform(520,500,2,2);

	this.mc_pixel_tile_310 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_310.setTransform(500,500,2,2);

	this.mc_pixel_tile_311 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_311.setTransform(480,500,2,2);

	this.mc_pixel_tile_312 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_312.setTransform(460,500,2,2);

	this.mc_pixel_tile_313 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_313.setTransform(440,500,2,2);

	this.mc_pixel_tile_314 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_314.setTransform(420,500,2,2);

	this.mc_pixel_tile_315 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_315.setTransform(400,500,2,2);

	this.mc_pixel_tile_316 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_316.setTransform(380,500,2,2);

	this.mc_pixel_tile_317 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_317.setTransform(360,500,2,2);

	this.mc_pixel_tile_318 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_318.setTransform(340,500,2,2);

	this.mc_pixel_tile_319 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_319.setTransform(320,500,2,2);

	this.mc_pixel_tile_320 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_320.setTransform(300,500,2,2);

	this.mc_pixel_tile_321 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_321.setTransform(280,500,2,2);

	this.mc_pixel_tile_322 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_322.setTransform(260,500,2,2);

	this.mc_pixel_tile_323 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_323.setTransform(240,500,2,2);

	this.mc_pixel_tile_324 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_324.setTransform(220,500,2,2);

	this.mc_pixel_tile_325 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_325.setTransform(200,500,2,2);

	this.mc_pixel_tile_326 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_326.setTransform(180,500,2,2);

	this.mc_pixel_tile_327 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_327.setTransform(160,500,2,2);

	this.mc_pixel_tile_328 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_328.setTransform(140,500,2,2);

	this.mc_pixel_tile_329 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_329.setTransform(120,500,2,2);

	this.mc_pixel_tile_330 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_330.setTransform(100,500,2,2);

	this.mc_pixel_tile_331 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_331.setTransform(80,500,2,2);

	this.mc_pixel_tile_332 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_332.setTransform(60,500,2,2);

	this.mc_pixel_tile_333 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_333.setTransform(40,500,2,2);

	this.mc_pixel_tile_334 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_334.setTransform(20,500,2,2);

	this.mc_pixel_tile_335 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_335.setTransform(0,500,2,2);

	this.mc_pixel_tile_336 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_336.setTransform(940,480,2,2);

	this.mc_pixel_tile_337 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_337.setTransform(920,480,2,2);

	this.mc_pixel_tile_338 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_338.setTransform(900,480,2,2);

	this.mc_pixel_tile_339 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_339.setTransform(880,480,2,2);

	this.mc_pixel_tile_340 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_340.setTransform(860,480,2,2);

	this.mc_pixel_tile_341 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_341.setTransform(840,480,2,2);

	this.mc_pixel_tile_342 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_342.setTransform(820,480,2,2);

	this.mc_pixel_tile_343 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_343.setTransform(800,480,2,2);

	this.mc_pixel_tile_344 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_344.setTransform(780,480,2,2);

	this.mc_pixel_tile_345 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_345.setTransform(760,480,2,2);

	this.mc_pixel_tile_346 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_346.setTransform(740,480,2,2);

	this.mc_pixel_tile_347 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_347.setTransform(720,480,2,2);

	this.mc_pixel_tile_348 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_348.setTransform(700,480,2,2);

	this.mc_pixel_tile_349 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_349.setTransform(680,480,2,2);

	this.mc_pixel_tile_350 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_350.setTransform(660,480,2,2);

	this.mc_pixel_tile_351 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_351.setTransform(640,480,2,2);

	this.mc_pixel_tile_352 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_352.setTransform(620,480,2,2);

	this.mc_pixel_tile_353 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_353.setTransform(600,480,2,2);

	this.mc_pixel_tile_354 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_354.setTransform(580,480,2,2);

	this.mc_pixel_tile_355 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_355.setTransform(560,480,2,2);

	this.mc_pixel_tile_356 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_356.setTransform(540,480,2,2);

	this.mc_pixel_tile_357 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_357.setTransform(520,480,2,2);

	this.mc_pixel_tile_358 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_358.setTransform(500,480,2,2);

	this.mc_pixel_tile_359 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_359.setTransform(480,480,2,2);

	this.mc_pixel_tile_360 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_360.setTransform(460,480,2,2);

	this.mc_pixel_tile_361 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_361.setTransform(440,480,2,2);

	this.mc_pixel_tile_362 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_362.setTransform(420,480,2,2);

	this.mc_pixel_tile_363 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_363.setTransform(400,480,2,2);

	this.mc_pixel_tile_364 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_364.setTransform(380,480,2,2);

	this.mc_pixel_tile_365 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_365.setTransform(360,480,2,2);

	this.mc_pixel_tile_366 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_366.setTransform(340,480,2,2);

	this.mc_pixel_tile_367 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_367.setTransform(320,480,2,2);

	this.mc_pixel_tile_368 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_368.setTransform(300,480,2,2);

	this.mc_pixel_tile_369 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_369.setTransform(280,480,2,2);

	this.mc_pixel_tile_370 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_370.setTransform(260,480,2,2);

	this.mc_pixel_tile_371 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_371.setTransform(240,480,2,2);

	this.mc_pixel_tile_372 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_372.setTransform(220,480,2,2);

	this.mc_pixel_tile_373 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_373.setTransform(200,480,2,2);

	this.mc_pixel_tile_374 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_374.setTransform(180,480,2,2);

	this.mc_pixel_tile_375 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_375.setTransform(160,480,2,2);

	this.mc_pixel_tile_376 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_376.setTransform(140,480,2,2);

	this.mc_pixel_tile_377 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_377.setTransform(120,480,2,2);

	this.mc_pixel_tile_378 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_378.setTransform(100,480,2,2);

	this.mc_pixel_tile_379 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_379.setTransform(80,480,2,2);

	this.mc_pixel_tile_380 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_380.setTransform(60,480,2,2);

	this.mc_pixel_tile_381 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_381.setTransform(40,480,2,2);

	this.mc_pixel_tile_382 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_382.setTransform(20,480,2,2);

	this.mc_pixel_tile_383 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_383.setTransform(0,480,2,2);

	this.mc_pixel_tile_384 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_384.setTransform(940,460,2,2);

	this.mc_pixel_tile_385 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_385.setTransform(920,460,2,2);

	this.mc_pixel_tile_386 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_386.setTransform(900,460,2,2);

	this.mc_pixel_tile_387 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_387.setTransform(880,460,2,2);

	this.mc_pixel_tile_388 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_388.setTransform(860,460,2,2);

	this.mc_pixel_tile_389 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_389.setTransform(840,460,2,2);

	this.mc_pixel_tile_390 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_390.setTransform(820,460,2,2);

	this.mc_pixel_tile_391 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_391.setTransform(800,460,2,2);

	this.mc_pixel_tile_392 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_392.setTransform(780,460,2,2);

	this.mc_pixel_tile_393 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_393.setTransform(760,460,2,2);

	this.mc_pixel_tile_394 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_394.setTransform(740,460,2,2);

	this.mc_pixel_tile_395 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_395.setTransform(720,460,2,2);

	this.mc_pixel_tile_396 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_396.setTransform(700,460,2,2);

	this.mc_pixel_tile_397 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_397.setTransform(680,460,2,2);

	this.mc_pixel_tile_398 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_398.setTransform(660,460,2,2);

	this.mc_pixel_tile_399 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_399.setTransform(640,460,2,2);

	this.mc_pixel_tile_400 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_400.setTransform(620,460,2,2);

	this.mc_pixel_tile_401 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_401.setTransform(600,460,2,2);

	this.mc_pixel_tile_402 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_402.setTransform(580,460,2,2);

	this.mc_pixel_tile_403 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_403.setTransform(560,460,2,2);

	this.mc_pixel_tile_404 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_404.setTransform(540,460,2,2);

	this.mc_pixel_tile_405 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_405.setTransform(520,460,2,2);

	this.mc_pixel_tile_406 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_406.setTransform(500,460,2,2);

	this.mc_pixel_tile_407 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_407.setTransform(480,460,2,2);

	this.mc_pixel_tile_408 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_408.setTransform(460,460,2,2);

	this.mc_pixel_tile_409 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_409.setTransform(440,460,2,2);

	this.mc_pixel_tile_410 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_410.setTransform(420,460,2,2);

	this.mc_pixel_tile_411 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_411.setTransform(400,460,2,2);

	this.mc_pixel_tile_412 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_412.setTransform(380,460,2,2);

	this.mc_pixel_tile_413 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_413.setTransform(360,460,2,2);

	this.mc_pixel_tile_414 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_414.setTransform(340,460,2,2);

	this.mc_pixel_tile_415 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_415.setTransform(320,460,2,2);

	this.mc_pixel_tile_416 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_416.setTransform(300,460,2,2);

	this.mc_pixel_tile_417 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_417.setTransform(280,460,2,2);

	this.mc_pixel_tile_418 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_418.setTransform(260,460,2,2);

	this.mc_pixel_tile_419 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_419.setTransform(240,460,2,2);

	this.mc_pixel_tile_420 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_420.setTransform(220,460,2,2);

	this.mc_pixel_tile_421 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_421.setTransform(200,460,2,2);

	this.mc_pixel_tile_422 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_422.setTransform(180,460,2,2);

	this.mc_pixel_tile_423 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_423.setTransform(160,460,2,2);

	this.mc_pixel_tile_424 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_424.setTransform(140,460,2,2);

	this.mc_pixel_tile_425 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_425.setTransform(120,460,2,2);

	this.mc_pixel_tile_426 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_426.setTransform(100,460,2,2);

	this.mc_pixel_tile_427 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_427.setTransform(80,460,2,2);

	this.mc_pixel_tile_428 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_428.setTransform(60,460,2,2);

	this.mc_pixel_tile_429 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_429.setTransform(40,460,2,2);

	this.mc_pixel_tile_430 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_430.setTransform(20,460,2,2);

	this.mc_pixel_tile_431 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_431.setTransform(0,460,2,2);

	this.mc_pixel_tile_432 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_432.setTransform(940,440,2,2);

	this.mc_pixel_tile_433 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_433.setTransform(920,440,2,2);

	this.mc_pixel_tile_434 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_434.setTransform(900,440,2,2);

	this.mc_pixel_tile_435 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_435.setTransform(880,440,2,2);

	this.mc_pixel_tile_436 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_436.setTransform(860,440,2,2);

	this.mc_pixel_tile_437 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_437.setTransform(840,440,2,2);

	this.mc_pixel_tile_438 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_438.setTransform(820,440,2,2);

	this.mc_pixel_tile_439 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_439.setTransform(800,440,2,2);

	this.mc_pixel_tile_440 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_440.setTransform(780,440,2,2);

	this.mc_pixel_tile_441 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_441.setTransform(760,440,2,2);

	this.mc_pixel_tile_442 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_442.setTransform(740,440,2,2);

	this.mc_pixel_tile_443 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_443.setTransform(720,440,2,2);

	this.mc_pixel_tile_444 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_444.setTransform(700,440,2,2);

	this.mc_pixel_tile_445 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_445.setTransform(680,440,2,2);

	this.mc_pixel_tile_446 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_446.setTransform(660,440,2,2);

	this.mc_pixel_tile_447 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_447.setTransform(640,440,2,2);

	this.mc_pixel_tile_448 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_448.setTransform(620,440,2,2);

	this.mc_pixel_tile_449 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_449.setTransform(600,440,2,2);

	this.mc_pixel_tile_450 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_450.setTransform(580,440,2,2);

	this.mc_pixel_tile_451 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_451.setTransform(560,440,2,2);

	this.mc_pixel_tile_452 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_452.setTransform(540,440,2,2);

	this.mc_pixel_tile_453 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_453.setTransform(520,440,2,2);

	this.mc_pixel_tile_454 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_454.setTransform(500,440,2,2);

	this.mc_pixel_tile_455 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_455.setTransform(480,440,2,2);

	this.mc_pixel_tile_456 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_456.setTransform(460,440,2,2);

	this.mc_pixel_tile_457 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_457.setTransform(440,440,2,2);

	this.mc_pixel_tile_458 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_458.setTransform(420,440,2,2);

	this.mc_pixel_tile_459 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_459.setTransform(400,440,2,2);

	this.mc_pixel_tile_460 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_460.setTransform(380,440,2,2);

	this.mc_pixel_tile_461 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_461.setTransform(360,440,2,2);

	this.mc_pixel_tile_462 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_462.setTransform(340,440,2,2);

	this.mc_pixel_tile_463 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_463.setTransform(320,440,2,2);

	this.mc_pixel_tile_464 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_464.setTransform(300,440,2,2);

	this.mc_pixel_tile_465 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_465.setTransform(280,440,2,2);

	this.mc_pixel_tile_466 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_466.setTransform(260,440,2,2);

	this.mc_pixel_tile_467 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_467.setTransform(240,440,2,2);

	this.mc_pixel_tile_468 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_468.setTransform(220,440,2,2);

	this.mc_pixel_tile_469 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_469.setTransform(200,440,2,2);

	this.mc_pixel_tile_470 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_470.setTransform(180,440,2,2);

	this.mc_pixel_tile_471 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_471.setTransform(160,440,2,2);

	this.mc_pixel_tile_472 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_472.setTransform(140,440,2,2);

	this.mc_pixel_tile_473 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_473.setTransform(120,440,2,2);

	this.mc_pixel_tile_474 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_474.setTransform(100,440,2,2);

	this.mc_pixel_tile_475 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_475.setTransform(80,440,2,2);

	this.mc_pixel_tile_476 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_476.setTransform(60,440,2,2);

	this.mc_pixel_tile_477 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_477.setTransform(40,440,2,2);

	this.mc_pixel_tile_478 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_478.setTransform(20,440,2,2);

	this.mc_pixel_tile_479 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_479.setTransform(0,440,2,2);

	this.mc_pixel_tile_480 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_480.setTransform(940,420,2,2);

	this.mc_pixel_tile_481 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_481.setTransform(920,420,2,2);

	this.mc_pixel_tile_482 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_482.setTransform(900,420,2,2);

	this.mc_pixel_tile_483 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_483.setTransform(880,420,2,2);

	this.mc_pixel_tile_484 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_484.setTransform(860,420,2,2);

	this.mc_pixel_tile_485 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_485.setTransform(840,420,2,2);

	this.mc_pixel_tile_486 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_486.setTransform(820,420,2,2);

	this.mc_pixel_tile_487 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_487.setTransform(800,420,2,2);

	this.mc_pixel_tile_488 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_488.setTransform(780,420,2,2);

	this.mc_pixel_tile_489 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_489.setTransform(760,420,2,2);

	this.mc_pixel_tile_490 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_490.setTransform(740,420,2,2);

	this.mc_pixel_tile_491 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_491.setTransform(720,420,2,2);

	this.mc_pixel_tile_492 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_492.setTransform(700,420,2,2);

	this.mc_pixel_tile_493 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_493.setTransform(680,420,2,2);

	this.mc_pixel_tile_494 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_494.setTransform(660,420,2,2);

	this.mc_pixel_tile_495 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_495.setTransform(640,420,2,2);

	this.mc_pixel_tile_496 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_496.setTransform(620,420,2,2);

	this.mc_pixel_tile_497 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_497.setTransform(600,420,2,2);

	this.mc_pixel_tile_498 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_498.setTransform(580,420,2,2);

	this.mc_pixel_tile_499 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_499.setTransform(560,420,2,2);

	this.mc_pixel_tile_500 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_500.setTransform(540,420,2,2);

	this.mc_pixel_tile_501 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_501.setTransform(520,420,2,2);

	this.mc_pixel_tile_502 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_502.setTransform(500,420,2,2);

	this.mc_pixel_tile_503 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_503.setTransform(480,420,2,2);

	this.mc_pixel_tile_504 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_504.setTransform(460,420,2,2);

	this.mc_pixel_tile_505 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_505.setTransform(440,420,2,2);

	this.mc_pixel_tile_506 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_506.setTransform(420,420,2,2);

	this.mc_pixel_tile_507 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_507.setTransform(400,420,2,2);

	this.mc_pixel_tile_508 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_508.setTransform(380,420,2,2);

	this.mc_pixel_tile_509 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_509.setTransform(360,420,2,2);

	this.mc_pixel_tile_510 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_510.setTransform(340,420,2,2);

	this.mc_pixel_tile_511 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_511.setTransform(320,420,2,2);

	this.mc_pixel_tile_512 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_512.setTransform(300,420,2,2);

	this.mc_pixel_tile_513 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_513.setTransform(280,420,2,2);

	this.mc_pixel_tile_514 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_514.setTransform(260,420,2,2);

	this.mc_pixel_tile_515 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_515.setTransform(240,420,2,2);

	this.mc_pixel_tile_516 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_516.setTransform(220,420,2,2);

	this.mc_pixel_tile_517 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_517.setTransform(200,420,2,2);

	this.mc_pixel_tile_518 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_518.setTransform(180,420,2,2);

	this.mc_pixel_tile_519 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_519.setTransform(160,420,2,2);

	this.mc_pixel_tile_520 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_520.setTransform(140,420,2,2);

	this.mc_pixel_tile_521 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_521.setTransform(120,420,2,2);

	this.mc_pixel_tile_522 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_522.setTransform(100,420,2,2);

	this.mc_pixel_tile_523 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_523.setTransform(80,420,2,2);

	this.mc_pixel_tile_524 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_524.setTransform(60,420,2,2);

	this.mc_pixel_tile_525 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_525.setTransform(40,420,2,2);

	this.mc_pixel_tile_526 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_526.setTransform(20,420,2,2);

	this.mc_pixel_tile_527 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_527.setTransform(0,420,2,2);

	this.mc_pixel_tile_528 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_528.setTransform(940,400,2,2);

	this.mc_pixel_tile_529 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_529.setTransform(920,400,2,2);

	this.mc_pixel_tile_530 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_530.setTransform(900,400,2,2);

	this.mc_pixel_tile_531 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_531.setTransform(880,400,2,2);

	this.mc_pixel_tile_532 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_532.setTransform(860,400,2,2);

	this.mc_pixel_tile_533 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_533.setTransform(840,400,2,2);

	this.mc_pixel_tile_534 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_534.setTransform(820,400,2,2);

	this.mc_pixel_tile_535 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_535.setTransform(800,400,2,2);

	this.mc_pixel_tile_536 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_536.setTransform(780,400,2,2);

	this.mc_pixel_tile_537 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_537.setTransform(760,400,2,2);

	this.mc_pixel_tile_538 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_538.setTransform(740,400,2,2);

	this.mc_pixel_tile_539 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_539.setTransform(720,400,2,2);

	this.mc_pixel_tile_540 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_540.setTransform(700,400,2,2);

	this.mc_pixel_tile_541 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_541.setTransform(680,400,2,2);

	this.mc_pixel_tile_542 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_542.setTransform(660,400,2,2);

	this.mc_pixel_tile_543 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_543.setTransform(640,400,2,2);

	this.mc_pixel_tile_544 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_544.setTransform(620,400,2,2);

	this.mc_pixel_tile_545 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_545.setTransform(600,400,2,2);

	this.mc_pixel_tile_546 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_546.setTransform(580,400,2,2);

	this.mc_pixel_tile_547 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_547.setTransform(560,400,2,2);

	this.mc_pixel_tile_548 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_548.setTransform(540,400,2,2);

	this.mc_pixel_tile_549 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_549.setTransform(520,400,2,2);

	this.mc_pixel_tile_550 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_550.setTransform(500,400,2,2);

	this.mc_pixel_tile_551 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_551.setTransform(480,400,2,2);

	this.mc_pixel_tile_552 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_552.setTransform(460,400,2,2);

	this.mc_pixel_tile_553 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_553.setTransform(440,400,2,2);

	this.mc_pixel_tile_554 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_554.setTransform(420,400,2,2);

	this.mc_pixel_tile_555 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_555.setTransform(400,400,2,2);

	this.mc_pixel_tile_556 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_556.setTransform(380,400,2,2);

	this.mc_pixel_tile_557 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_557.setTransform(360,400,2,2);

	this.mc_pixel_tile_558 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_558.setTransform(340,400,2,2);

	this.mc_pixel_tile_559 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_559.setTransform(320,400,2,2);

	this.mc_pixel_tile_560 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_560.setTransform(300,400,2,2);

	this.mc_pixel_tile_561 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_561.setTransform(280,400,2,2);

	this.mc_pixel_tile_562 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_562.setTransform(260,400,2,2);

	this.mc_pixel_tile_563 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_563.setTransform(240,400,2,2);

	this.mc_pixel_tile_564 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_564.setTransform(220,400,2,2);

	this.mc_pixel_tile_565 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_565.setTransform(200,400,2,2);

	this.mc_pixel_tile_566 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_566.setTransform(180,400,2,2);

	this.mc_pixel_tile_567 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_567.setTransform(160,400,2,2);

	this.mc_pixel_tile_568 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_568.setTransform(140,400,2,2);

	this.mc_pixel_tile_569 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_569.setTransform(120,400,2,2);

	this.mc_pixel_tile_570 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_570.setTransform(100,400,2,2);

	this.mc_pixel_tile_571 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_571.setTransform(80,400,2,2);

	this.mc_pixel_tile_572 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_572.setTransform(60,400,2,2);

	this.mc_pixel_tile_573 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_573.setTransform(40,400,2,2);

	this.mc_pixel_tile_574 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_574.setTransform(20,400,2,2);

	this.mc_pixel_tile_575 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_575.setTransform(0,400,2,2);

	this.mc_pixel_tile_576 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_576.setTransform(940,380,2,2);

	this.mc_pixel_tile_577 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_577.setTransform(920,380,2,2);

	this.mc_pixel_tile_578 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_578.setTransform(900,380,2,2);

	this.mc_pixel_tile_579 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_579.setTransform(880,380,2,2);

	this.mc_pixel_tile_580 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_580.setTransform(860,380,2,2);

	this.mc_pixel_tile_581 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_581.setTransform(840,380,2,2);

	this.mc_pixel_tile_582 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_582.setTransform(820,380,2,2);

	this.mc_pixel_tile_583 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_583.setTransform(800,380,2,2);

	this.mc_pixel_tile_584 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_584.setTransform(780,380,2,2);

	this.mc_pixel_tile_585 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_585.setTransform(760,380,2,2);

	this.mc_pixel_tile_586 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_586.setTransform(740,380,2,2);

	this.mc_pixel_tile_587 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_587.setTransform(720,380,2,2);

	this.mc_pixel_tile_588 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_588.setTransform(700,380,2,2);

	this.mc_pixel_tile_589 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_589.setTransform(680,380,2,2);

	this.mc_pixel_tile_590 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_590.setTransform(660,380,2,2);

	this.mc_pixel_tile_591 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_591.setTransform(640,380,2,2);

	this.mc_pixel_tile_592 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_592.setTransform(620,380,2,2);

	this.mc_pixel_tile_593 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_593.setTransform(600,380,2,2);

	this.mc_pixel_tile_594 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_594.setTransform(580,380,2,2);

	this.mc_pixel_tile_595 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_595.setTransform(560,380,2,2);

	this.mc_pixel_tile_596 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_596.setTransform(540,380,2,2);

	this.mc_pixel_tile_597 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_597.setTransform(520,380,2,2);

	this.mc_pixel_tile_598 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_598.setTransform(500,380,2,2);

	this.mc_pixel_tile_599 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_599.setTransform(480,380,2,2);

	this.mc_pixel_tile_600 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_600.setTransform(460,380,2,2);

	this.mc_pixel_tile_601 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_601.setTransform(440,380,2,2);

	this.mc_pixel_tile_602 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_602.setTransform(420,380,2,2);

	this.mc_pixel_tile_603 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_603.setTransform(400,380,2,2);

	this.mc_pixel_tile_604 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_604.setTransform(380,380,2,2);

	this.mc_pixel_tile_605 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_605.setTransform(360,380,2,2);

	this.mc_pixel_tile_606 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_606.setTransform(340,380,2,2);

	this.mc_pixel_tile_607 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_607.setTransform(320,380,2,2);

	this.mc_pixel_tile_608 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_608.setTransform(300,380,2,2);

	this.mc_pixel_tile_609 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_609.setTransform(280,380,2,2);

	this.mc_pixel_tile_610 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_610.setTransform(260,380,2,2);

	this.mc_pixel_tile_611 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_611.setTransform(240,380,2,2);

	this.mc_pixel_tile_612 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_612.setTransform(220,380,2,2);

	this.mc_pixel_tile_613 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_613.setTransform(200,380,2,2);

	this.mc_pixel_tile_614 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_614.setTransform(180,380,2,2);

	this.mc_pixel_tile_615 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_615.setTransform(160,380,2,2);

	this.mc_pixel_tile_616 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_616.setTransform(140,380,2,2);

	this.mc_pixel_tile_617 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_617.setTransform(120,380,2,2);

	this.mc_pixel_tile_618 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_618.setTransform(100,380,2,2);

	this.mc_pixel_tile_619 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_619.setTransform(80,380,2,2);

	this.mc_pixel_tile_620 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_620.setTransform(60,380,2,2);

	this.mc_pixel_tile_621 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_621.setTransform(40,380,2,2);

	this.mc_pixel_tile_622 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_622.setTransform(20,380,2,2);

	this.mc_pixel_tile_623 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_623.setTransform(0,380,2,2);

	this.mc_pixel_tile_624 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_624.setTransform(940,360,2,2);

	this.mc_pixel_tile_625 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_625.setTransform(920,360,2,2);

	this.mc_pixel_tile_626 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_626.setTransform(900,360,2,2);

	this.mc_pixel_tile_627 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_627.setTransform(880,360,2,2);

	this.mc_pixel_tile_628 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_628.setTransform(860,360,2,2);

	this.mc_pixel_tile_629 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_629.setTransform(840,360,2,2);

	this.mc_pixel_tile_630 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_630.setTransform(820,360,2,2);

	this.mc_pixel_tile_631 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_631.setTransform(800,360,2,2);

	this.mc_pixel_tile_632 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_632.setTransform(780,360,2,2);

	this.mc_pixel_tile_633 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_633.setTransform(760,360,2,2);

	this.mc_pixel_tile_634 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_634.setTransform(740,360,2,2);

	this.mc_pixel_tile_635 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_635.setTransform(720,360,2,2);

	this.mc_pixel_tile_636 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_636.setTransform(700,360,2,2);

	this.mc_pixel_tile_637 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_637.setTransform(680,360,2,2);

	this.mc_pixel_tile_638 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_638.setTransform(660,360,2,2);

	this.mc_pixel_tile_639 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_639.setTransform(640,360,2,2);

	this.mc_pixel_tile_640 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_640.setTransform(620,360,2,2);

	this.mc_pixel_tile_641 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_641.setTransform(600,360,2,2);

	this.mc_pixel_tile_642 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_642.setTransform(580,360,2,2);

	this.mc_pixel_tile_643 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_643.setTransform(560,360,2,2);

	this.mc_pixel_tile_644 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_644.setTransform(540,360,2,2);

	this.mc_pixel_tile_645 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_645.setTransform(520,360,2,2);

	this.mc_pixel_tile_646 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_646.setTransform(500,360,2,2);

	this.mc_pixel_tile_647 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_647.setTransform(480,360,2,2);

	this.mc_pixel_tile_648 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_648.setTransform(460,360,2,2);

	this.mc_pixel_tile_649 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_649.setTransform(440,360,2,2);

	this.mc_pixel_tile_650 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_650.setTransform(420,360,2,2);

	this.mc_pixel_tile_651 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_651.setTransform(400,360,2,2);

	this.mc_pixel_tile_652 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_652.setTransform(380,360,2,2);

	this.mc_pixel_tile_653 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_653.setTransform(360,360,2,2);

	this.mc_pixel_tile_654 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_654.setTransform(340,360,2,2);

	this.mc_pixel_tile_655 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_655.setTransform(320,360,2,2);

	this.mc_pixel_tile_656 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_656.setTransform(300,360,2,2);

	this.mc_pixel_tile_657 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_657.setTransform(280,360,2,2);

	this.mc_pixel_tile_658 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_658.setTransform(260,360,2,2);

	this.mc_pixel_tile_659 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_659.setTransform(240,360,2,2);

	this.mc_pixel_tile_660 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_660.setTransform(220,360,2,2);

	this.mc_pixel_tile_661 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_661.setTransform(200,360,2,2);

	this.mc_pixel_tile_662 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_662.setTransform(180,360,2,2);

	this.mc_pixel_tile_663 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_663.setTransform(160,360,2,2);

	this.mc_pixel_tile_664 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_664.setTransform(140,360,2,2);

	this.mc_pixel_tile_665 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_665.setTransform(120,360,2,2);

	this.mc_pixel_tile_666 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_666.setTransform(100,360,2,2);

	this.mc_pixel_tile_667 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_667.setTransform(80,360,2,2);

	this.mc_pixel_tile_668 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_668.setTransform(60,360,2,2);

	this.mc_pixel_tile_669 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_669.setTransform(40,360,2,2);

	this.mc_pixel_tile_670 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_670.setTransform(20,360,2,2);

	this.mc_pixel_tile_671 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_671.setTransform(0,360,2,2);

	this.mc_pixel_tile_672 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_672.setTransform(940,340,2,2);

	this.mc_pixel_tile_673 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_673.setTransform(920,340,2,2);

	this.mc_pixel_tile_674 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_674.setTransform(900,340,2,2);

	this.mc_pixel_tile_675 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_675.setTransform(880,340,2,2);

	this.mc_pixel_tile_676 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_676.setTransform(860,340,2,2);

	this.mc_pixel_tile_677 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_677.setTransform(840,340,2,2);

	this.mc_pixel_tile_678 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_678.setTransform(820,340,2,2);

	this.mc_pixel_tile_679 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_679.setTransform(800,340,2,2);

	this.mc_pixel_tile_680 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_680.setTransform(780,340,2,2);

	this.mc_pixel_tile_681 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_681.setTransform(760,340,2,2);

	this.mc_pixel_tile_682 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_682.setTransform(740,340,2,2);

	this.mc_pixel_tile_683 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_683.setTransform(720,340,2,2);

	this.mc_pixel_tile_684 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_684.setTransform(700,340,2,2);

	this.mc_pixel_tile_685 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_685.setTransform(680,340,2,2);

	this.mc_pixel_tile_686 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_686.setTransform(660,340,2,2);

	this.mc_pixel_tile_687 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_687.setTransform(640,340,2,2);

	this.mc_pixel_tile_688 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_688.setTransform(620,340,2,2);

	this.mc_pixel_tile_689 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_689.setTransform(600,340,2,2);

	this.mc_pixel_tile_690 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_690.setTransform(580,340,2,2);

	this.mc_pixel_tile_691 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_691.setTransform(560,340,2,2);

	this.mc_pixel_tile_692 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_692.setTransform(540,340,2,2);

	this.mc_pixel_tile_693 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_693.setTransform(520,340,2,2);

	this.mc_pixel_tile_694 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_694.setTransform(500,340,2,2);

	this.mc_pixel_tile_695 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_695.setTransform(480,340,2,2);

	this.mc_pixel_tile_696 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_696.setTransform(460,340,2,2);

	this.mc_pixel_tile_697 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_697.setTransform(440,340,2,2);

	this.mc_pixel_tile_698 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_698.setTransform(420,340,2,2);

	this.mc_pixel_tile_699 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_699.setTransform(400,340,2,2);

	this.mc_pixel_tile_700 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_700.setTransform(380,340,2,2);

	this.mc_pixel_tile_701 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_701.setTransform(360,340,2,2);

	this.mc_pixel_tile_702 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_702.setTransform(340,340,2,2);

	this.mc_pixel_tile_703 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_703.setTransform(320,340,2,2);

	this.mc_pixel_tile_704 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_704.setTransform(300,340,2,2);

	this.mc_pixel_tile_705 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_705.setTransform(280,340,2,2);

	this.mc_pixel_tile_706 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_706.setTransform(260,340,2,2);

	this.mc_pixel_tile_707 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_707.setTransform(240,340,2,2);

	this.mc_pixel_tile_708 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_708.setTransform(220,340,2,2);

	this.mc_pixel_tile_709 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_709.setTransform(200,340,2,2);

	this.mc_pixel_tile_710 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_710.setTransform(180,340,2,2);

	this.mc_pixel_tile_711 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_711.setTransform(160,340,2,2);

	this.mc_pixel_tile_712 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_712.setTransform(140,340,2,2);

	this.mc_pixel_tile_713 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_713.setTransform(120,340,2,2);

	this.mc_pixel_tile_714 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_714.setTransform(100,340,2,2);

	this.mc_pixel_tile_715 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_715.setTransform(80,340,2,2);

	this.mc_pixel_tile_716 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_716.setTransform(60,340,2,2);

	this.mc_pixel_tile_717 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_717.setTransform(40,340,2,2);

	this.mc_pixel_tile_718 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_718.setTransform(20,340,2,2);

	this.mc_pixel_tile_719 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_719.setTransform(0,340,2,2);

	this.mc_pixel_tile_720 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_720.setTransform(940,320,2,2);

	this.mc_pixel_tile_721 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_721.setTransform(920,320,2,2);

	this.mc_pixel_tile_722 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_722.setTransform(900,320,2,2);

	this.mc_pixel_tile_723 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_723.setTransform(880,320,2,2);

	this.mc_pixel_tile_724 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_724.setTransform(860,320,2,2);

	this.mc_pixel_tile_725 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_725.setTransform(840,320,2,2);

	this.mc_pixel_tile_726 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_726.setTransform(820,320,2,2);

	this.mc_pixel_tile_727 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_727.setTransform(800,320,2,2);

	this.mc_pixel_tile_728 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_728.setTransform(780,320,2,2);

	this.mc_pixel_tile_729 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_729.setTransform(760,320,2,2);

	this.mc_pixel_tile_730 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_730.setTransform(740,320,2,2);

	this.mc_pixel_tile_731 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_731.setTransform(720,320,2,2);

	this.mc_pixel_tile_732 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_732.setTransform(700,320,2,2);

	this.mc_pixel_tile_733 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_733.setTransform(680,320,2,2);

	this.mc_pixel_tile_734 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_734.setTransform(660,320,2,2);

	this.mc_pixel_tile_735 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_735.setTransform(640,320,2,2);

	this.mc_pixel_tile_736 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_736.setTransform(620,320,2,2);

	this.mc_pixel_tile_737 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_737.setTransform(600,320,2,2);

	this.mc_pixel_tile_738 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_738.setTransform(580,320,2,2);

	this.mc_pixel_tile_739 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_739.setTransform(560,320,2,2);

	this.mc_pixel_tile_740 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_740.setTransform(540,320,2,2);

	this.mc_pixel_tile_741 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_741.setTransform(520,320,2,2);

	this.mc_pixel_tile_742 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_742.setTransform(500,320,2,2);

	this.mc_pixel_tile_743 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_743.setTransform(480,320,2,2);

	this.mc_pixel_tile_744 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_744.setTransform(460,320,2,2);

	this.mc_pixel_tile_745 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_745.setTransform(440,320,2,2);

	this.mc_pixel_tile_746 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_746.setTransform(420,320,2,2);

	this.mc_pixel_tile_747 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_747.setTransform(400,320,2,2);

	this.mc_pixel_tile_748 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_748.setTransform(380,320,2,2);

	this.mc_pixel_tile_749 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_749.setTransform(360,320,2,2);

	this.mc_pixel_tile_750 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_750.setTransform(340,320,2,2);

	this.mc_pixel_tile_751 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_751.setTransform(320,320,2,2);

	this.mc_pixel_tile_752 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_752.setTransform(300,320,2,2);

	this.mc_pixel_tile_753 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_753.setTransform(280,320,2,2);

	this.mc_pixel_tile_754 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_754.setTransform(260,320,2,2);

	this.mc_pixel_tile_755 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_755.setTransform(240,320,2,2);

	this.mc_pixel_tile_756 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_756.setTransform(220,320,2,2);

	this.mc_pixel_tile_757 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_757.setTransform(200,320,2,2);

	this.mc_pixel_tile_758 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_758.setTransform(180,320,2,2);

	this.mc_pixel_tile_759 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_759.setTransform(160,320,2,2);

	this.mc_pixel_tile_760 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_760.setTransform(140,320,2,2);

	this.mc_pixel_tile_761 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_761.setTransform(120,320,2,2);

	this.mc_pixel_tile_762 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_762.setTransform(100,320,2,2);

	this.mc_pixel_tile_763 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_763.setTransform(80,320,2,2);

	this.mc_pixel_tile_764 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_764.setTransform(60,320,2,2);

	this.mc_pixel_tile_765 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_765.setTransform(40,320,2,2);

	this.mc_pixel_tile_766 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_766.setTransform(20,320,2,2);

	this.mc_pixel_tile_767 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_767.setTransform(0,320,2,2);

	this.mc_pixel_tile_768 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_768.setTransform(940,300,2,2);

	this.mc_pixel_tile_769 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_769.setTransform(920,300,2,2);

	this.mc_pixel_tile_770 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_770.setTransform(900,300,2,2);

	this.mc_pixel_tile_771 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_771.setTransform(880,300,2,2);

	this.mc_pixel_tile_772 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_772.setTransform(860,300,2,2);

	this.mc_pixel_tile_773 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_773.setTransform(840,300,2,2);

	this.mc_pixel_tile_774 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_774.setTransform(820,300,2,2);

	this.mc_pixel_tile_775 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_775.setTransform(800,300,2,2);

	this.mc_pixel_tile_776 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_776.setTransform(780,300,2,2);

	this.mc_pixel_tile_777 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_777.setTransform(760,300,2,2);

	this.mc_pixel_tile_778 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_778.setTransform(740,300,2,2);

	this.mc_pixel_tile_779 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_779.setTransform(720,300,2,2);

	this.mc_pixel_tile_780 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_780.setTransform(700,300,2,2);

	this.mc_pixel_tile_781 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_781.setTransform(680,300,2,2);

	this.mc_pixel_tile_782 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_782.setTransform(660,300,2,2);

	this.mc_pixel_tile_783 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_783.setTransform(640,300,2,2);

	this.mc_pixel_tile_784 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_784.setTransform(620,300,2,2);

	this.mc_pixel_tile_785 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_785.setTransform(600,300,2,2);

	this.mc_pixel_tile_786 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_786.setTransform(580,300,2,2);

	this.mc_pixel_tile_787 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_787.setTransform(560,300,2,2);

	this.mc_pixel_tile_788 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_788.setTransform(540,300,2,2);

	this.mc_pixel_tile_789 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_789.setTransform(520,300,2,2);

	this.mc_pixel_tile_790 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_790.setTransform(500,300,2,2);

	this.mc_pixel_tile_791 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_791.setTransform(480,300,2,2);

	this.mc_pixel_tile_792 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_792.setTransform(460,300,2,2);

	this.mc_pixel_tile_793 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_793.setTransform(440,300,2,2);

	this.mc_pixel_tile_794 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_794.setTransform(420,300,2,2);

	this.mc_pixel_tile_795 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_795.setTransform(400,300,2,2);

	this.mc_pixel_tile_796 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_796.setTransform(380,300,2,2);

	this.mc_pixel_tile_797 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_797.setTransform(360,300,2,2);

	this.mc_pixel_tile_798 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_798.setTransform(340,300,2,2);

	this.mc_pixel_tile_799 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_799.setTransform(320,300,2,2);

	this.mc_pixel_tile_800 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_800.setTransform(300,300,2,2);

	this.mc_pixel_tile_801 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_801.setTransform(280,300,2,2);

	this.mc_pixel_tile_802 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_802.setTransform(260,300,2,2);

	this.mc_pixel_tile_803 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_803.setTransform(240,300,2,2);

	this.mc_pixel_tile_804 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_804.setTransform(220,300,2,2);

	this.mc_pixel_tile_805 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_805.setTransform(200,300,2,2);

	this.mc_pixel_tile_806 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_806.setTransform(180,300,2,2);

	this.mc_pixel_tile_807 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_807.setTransform(160,300,2,2);

	this.mc_pixel_tile_808 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_808.setTransform(140,300,2,2);

	this.mc_pixel_tile_809 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_809.setTransform(120,300,2,2);

	this.mc_pixel_tile_810 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_810.setTransform(100,300,2,2);

	this.mc_pixel_tile_811 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_811.setTransform(80,300,2,2);

	this.mc_pixel_tile_812 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_812.setTransform(60,300,2,2);

	this.mc_pixel_tile_813 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_813.setTransform(40,300,2,2);

	this.mc_pixel_tile_814 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_814.setTransform(20,300,2,2);

	this.mc_pixel_tile_815 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_815.setTransform(0,300,2,2);

	this.mc_pixel_tile_816 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_816.setTransform(940,280,2,2);

	this.mc_pixel_tile_817 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_817.setTransform(920,280,2,2);

	this.mc_pixel_tile_818 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_818.setTransform(900,280,2,2);

	this.mc_pixel_tile_819 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_819.setTransform(880,280,2,2);

	this.mc_pixel_tile_820 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_820.setTransform(860,280,2,2);

	this.mc_pixel_tile_821 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_821.setTransform(840,280,2,2);

	this.mc_pixel_tile_822 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_822.setTransform(820,280,2,2);

	this.mc_pixel_tile_823 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_823.setTransform(800,280,2,2);

	this.mc_pixel_tile_824 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_824.setTransform(780,280,2,2);

	this.mc_pixel_tile_825 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_825.setTransform(760,280,2,2);

	this.mc_pixel_tile_826 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_826.setTransform(740,280,2,2);

	this.mc_pixel_tile_827 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_827.setTransform(720,280,2,2);

	this.mc_pixel_tile_828 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_828.setTransform(700,280,2,2);

	this.mc_pixel_tile_829 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_829.setTransform(680,280,2,2);

	this.mc_pixel_tile_830 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_830.setTransform(660,280,2,2);

	this.mc_pixel_tile_831 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_831.setTransform(640,280,2,2);

	this.mc_pixel_tile_832 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_832.setTransform(620,280,2,2);

	this.mc_pixel_tile_833 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_833.setTransform(600,280,2,2);

	this.mc_pixel_tile_834 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_834.setTransform(580,280,2,2);

	this.mc_pixel_tile_835 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_835.setTransform(560,280,2,2);

	this.mc_pixel_tile_836 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_836.setTransform(540,280,2,2);

	this.mc_pixel_tile_837 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_837.setTransform(520,280,2,2);

	this.mc_pixel_tile_838 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_838.setTransform(500,280,2,2);

	this.mc_pixel_tile_839 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_839.setTransform(480,280,2,2);

	this.mc_pixel_tile_840 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_840.setTransform(460,280,2,2);

	this.mc_pixel_tile_841 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_841.setTransform(440,280,2,2);

	this.mc_pixel_tile_842 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_842.setTransform(420,280,2,2);

	this.mc_pixel_tile_843 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_843.setTransform(400,280,2,2);

	this.mc_pixel_tile_844 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_844.setTransform(380,280,2,2);

	this.mc_pixel_tile_845 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_845.setTransform(360,280,2,2);

	this.mc_pixel_tile_846 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_846.setTransform(340,280,2,2);

	this.mc_pixel_tile_847 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_847.setTransform(320,280,2,2);

	this.mc_pixel_tile_848 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_848.setTransform(300,280,2,2);

	this.mc_pixel_tile_849 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_849.setTransform(280,280,2,2);

	this.mc_pixel_tile_850 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_850.setTransform(260,280,2,2);

	this.mc_pixel_tile_851 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_851.setTransform(240,280,2,2);

	this.mc_pixel_tile_852 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_852.setTransform(220,280,2,2);

	this.mc_pixel_tile_853 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_853.setTransform(200,280,2,2);

	this.mc_pixel_tile_854 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_854.setTransform(180,280,2,2);

	this.mc_pixel_tile_855 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_855.setTransform(160,280,2,2);

	this.mc_pixel_tile_856 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_856.setTransform(140,280,2,2);

	this.mc_pixel_tile_857 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_857.setTransform(120,280,2,2);

	this.mc_pixel_tile_858 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_858.setTransform(100,280,2,2);

	this.mc_pixel_tile_859 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_859.setTransform(80,280,2,2);

	this.mc_pixel_tile_860 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_860.setTransform(60,280,2,2);

	this.mc_pixel_tile_861 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_861.setTransform(40,280,2,2);

	this.mc_pixel_tile_862 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_862.setTransform(20,280,2,2);

	this.mc_pixel_tile_863 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_863.setTransform(0,280,2,2);

	this.mc_pixel_tile_864 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_864.setTransform(940,260,2,2);

	this.mc_pixel_tile_865 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_865.setTransform(920,260,2,2);

	this.mc_pixel_tile_866 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_866.setTransform(900,260,2,2);

	this.mc_pixel_tile_867 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_867.setTransform(880,260,2,2);

	this.mc_pixel_tile_868 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_868.setTransform(860,260,2,2);

	this.mc_pixel_tile_869 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_869.setTransform(840,260,2,2);

	this.mc_pixel_tile_870 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_870.setTransform(820,260,2,2);

	this.mc_pixel_tile_871 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_871.setTransform(800,260,2,2);

	this.mc_pixel_tile_872 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_872.setTransform(780,260,2,2);

	this.mc_pixel_tile_873 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_873.setTransform(760,260,2,2);

	this.mc_pixel_tile_874 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_874.setTransform(740,260,2,2);

	this.mc_pixel_tile_875 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_875.setTransform(720,260,2,2);

	this.mc_pixel_tile_876 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_876.setTransform(700,260,2,2);

	this.mc_pixel_tile_877 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_877.setTransform(680,260,2,2);

	this.mc_pixel_tile_878 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_878.setTransform(660,260,2,2);

	this.mc_pixel_tile_879 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_879.setTransform(640,260,2,2);

	this.mc_pixel_tile_880 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_880.setTransform(620,260,2,2);

	this.mc_pixel_tile_881 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_881.setTransform(600,260,2,2);

	this.mc_pixel_tile_882 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_882.setTransform(580,260,2,2);

	this.mc_pixel_tile_883 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_883.setTransform(560,260,2,2);

	this.mc_pixel_tile_884 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_884.setTransform(540,260,2,2);

	this.mc_pixel_tile_885 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_885.setTransform(520,260,2,2);

	this.mc_pixel_tile_886 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_886.setTransform(500,260,2,2);

	this.mc_pixel_tile_887 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_887.setTransform(480,260,2,2);

	this.mc_pixel_tile_888 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_888.setTransform(460,260,2,2);

	this.mc_pixel_tile_889 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_889.setTransform(440,260,2,2);

	this.mc_pixel_tile_890 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_890.setTransform(420,260,2,2);

	this.mc_pixel_tile_891 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_891.setTransform(400,260,2,2);

	this.mc_pixel_tile_892 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_892.setTransform(380,260,2,2);

	this.mc_pixel_tile_893 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_893.setTransform(360,260,2,2);

	this.mc_pixel_tile_894 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_894.setTransform(340,260,2,2);

	this.mc_pixel_tile_895 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_895.setTransform(320,260,2,2);

	this.mc_pixel_tile_896 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_896.setTransform(300,260,2,2);

	this.mc_pixel_tile_897 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_897.setTransform(280,260,2,2);

	this.mc_pixel_tile_898 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_898.setTransform(260,260,2,2);

	this.mc_pixel_tile_899 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_899.setTransform(240,260,2,2);

	this.mc_pixel_tile_900 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_900.setTransform(220,260,2,2);

	this.mc_pixel_tile_901 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_901.setTransform(200,260,2,2);

	this.mc_pixel_tile_902 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_902.setTransform(180,260,2,2);

	this.mc_pixel_tile_903 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_903.setTransform(160,260,2,2);

	this.mc_pixel_tile_904 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_904.setTransform(140,260,2,2);

	this.mc_pixel_tile_905 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_905.setTransform(120,260,2,2);

	this.mc_pixel_tile_906 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_906.setTransform(100,260,2,2);

	this.mc_pixel_tile_907 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_907.setTransform(80,260,2,2);

	this.mc_pixel_tile_908 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_908.setTransform(60,260,2,2);

	this.mc_pixel_tile_909 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_909.setTransform(40,260,2,2);

	this.mc_pixel_tile_910 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_910.setTransform(20,260,2,2);

	this.mc_pixel_tile_911 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_911.setTransform(0,260,2,2);

	this.mc_pixel_tile_912 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_912.setTransform(940,240,2,2);

	this.mc_pixel_tile_913 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_913.setTransform(920,240,2,2);

	this.mc_pixel_tile_914 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_914.setTransform(900,240,2,2);

	this.mc_pixel_tile_915 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_915.setTransform(880,240,2,2);

	this.mc_pixel_tile_916 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_916.setTransform(860,240,2,2);

	this.mc_pixel_tile_917 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_917.setTransform(840,240,2,2);

	this.mc_pixel_tile_918 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_918.setTransform(820,240,2,2);

	this.mc_pixel_tile_919 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_919.setTransform(800,240,2,2);

	this.mc_pixel_tile_920 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_920.setTransform(780,240,2,2);

	this.mc_pixel_tile_921 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_921.setTransform(760,240,2,2);

	this.mc_pixel_tile_922 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_922.setTransform(740,240,2,2);

	this.mc_pixel_tile_923 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_923.setTransform(720,240,2,2);

	this.mc_pixel_tile_924 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_924.setTransform(700,240,2,2);

	this.mc_pixel_tile_925 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_925.setTransform(680,240,2,2);

	this.mc_pixel_tile_926 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_926.setTransform(660,240,2,2);

	this.mc_pixel_tile_927 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_927.setTransform(640,240,2,2);

	this.mc_pixel_tile_928 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_928.setTransform(620,240,2,2);

	this.mc_pixel_tile_929 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_929.setTransform(600,240,2,2);

	this.mc_pixel_tile_930 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_930.setTransform(580,240,2,2);

	this.mc_pixel_tile_931 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_931.setTransform(560,240,2,2);

	this.mc_pixel_tile_932 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_932.setTransform(540,240,2,2);

	this.mc_pixel_tile_933 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_933.setTransform(520,240,2,2);

	this.mc_pixel_tile_934 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_934.setTransform(500,240,2,2);

	this.mc_pixel_tile_935 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_935.setTransform(480,240,2,2);

	this.mc_pixel_tile_936 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_936.setTransform(460,240,2,2);

	this.mc_pixel_tile_937 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_937.setTransform(440,240,2,2);

	this.mc_pixel_tile_938 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_938.setTransform(420,240,2,2);

	this.mc_pixel_tile_939 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_939.setTransform(400,240,2,2);

	this.mc_pixel_tile_940 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_940.setTransform(380,240,2,2);

	this.mc_pixel_tile_941 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_941.setTransform(360,240,2,2);

	this.mc_pixel_tile_942 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_942.setTransform(340,240,2,2);

	this.mc_pixel_tile_943 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_943.setTransform(320,240,2,2);

	this.mc_pixel_tile_944 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_944.setTransform(300,240,2,2);

	this.mc_pixel_tile_945 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_945.setTransform(280,240,2,2);

	this.mc_pixel_tile_946 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_946.setTransform(260,240,2,2);

	this.mc_pixel_tile_947 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_947.setTransform(240,240,2,2);

	this.mc_pixel_tile_948 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_948.setTransform(220,240,2,2);

	this.mc_pixel_tile_949 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_949.setTransform(200,240,2,2);

	this.mc_pixel_tile_950 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_950.setTransform(180,240,2,2);

	this.mc_pixel_tile_951 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_951.setTransform(160,240,2,2);

	this.mc_pixel_tile_952 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_952.setTransform(140,240,2,2);

	this.mc_pixel_tile_953 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_953.setTransform(120,240,2,2);

	this.mc_pixel_tile_954 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_954.setTransform(100,240,2,2);

	this.mc_pixel_tile_955 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_955.setTransform(80,240,2,2);

	this.mc_pixel_tile_956 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_956.setTransform(60,240,2,2);

	this.mc_pixel_tile_957 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_957.setTransform(40,240,2,2);

	this.mc_pixel_tile_958 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_958.setTransform(20,240,2,2);

	this.mc_pixel_tile_959 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_959.setTransform(0,240,2,2);

	this.mc_pixel_tile_960 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_960.setTransform(940,220,2,2);

	this.mc_pixel_tile_961 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_961.setTransform(920,220,2,2);

	this.mc_pixel_tile_962 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_962.setTransform(900,220,2,2);

	this.mc_pixel_tile_963 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_963.setTransform(880,220,2,2);

	this.mc_pixel_tile_964 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_964.setTransform(860,220,2,2);

	this.mc_pixel_tile_965 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_965.setTransform(840,220,2,2);

	this.mc_pixel_tile_966 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_966.setTransform(820,220,2,2);

	this.mc_pixel_tile_967 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_967.setTransform(800,220,2,2);

	this.mc_pixel_tile_968 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_968.setTransform(780,220,2,2);

	this.mc_pixel_tile_969 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_969.setTransform(760,220,2,2);

	this.mc_pixel_tile_970 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_970.setTransform(740,220,2,2);

	this.mc_pixel_tile_971 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_971.setTransform(720,220,2,2);

	this.mc_pixel_tile_972 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_972.setTransform(700,220,2,2);

	this.mc_pixel_tile_973 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_973.setTransform(680,220,2,2);

	this.mc_pixel_tile_974 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_974.setTransform(660,220,2,2);

	this.mc_pixel_tile_975 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_975.setTransform(640,220,2,2);

	this.mc_pixel_tile_976 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_976.setTransform(620,220,2,2);

	this.mc_pixel_tile_977 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_977.setTransform(600,220,2,2);

	this.mc_pixel_tile_978 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_978.setTransform(580,220,2,2);

	this.mc_pixel_tile_979 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_979.setTransform(560,220,2,2);

	this.mc_pixel_tile_980 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_980.setTransform(540,220,2,2);

	this.mc_pixel_tile_981 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_981.setTransform(520,220,2,2);

	this.mc_pixel_tile_982 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_982.setTransform(500,220,2,2);

	this.mc_pixel_tile_983 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_983.setTransform(480,220,2,2);

	this.mc_pixel_tile_984 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_984.setTransform(460,220,2,2);

	this.mc_pixel_tile_985 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_985.setTransform(440,220,2,2);

	this.mc_pixel_tile_986 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_986.setTransform(420,220,2,2);

	this.mc_pixel_tile_987 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_987.setTransform(400,220,2,2);

	this.mc_pixel_tile_988 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_988.setTransform(380,220,2,2);

	this.mc_pixel_tile_989 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_989.setTransform(360,220,2,2);

	this.mc_pixel_tile_990 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_990.setTransform(340,220,2,2);

	this.mc_pixel_tile_991 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_991.setTransform(320,220,2,2);

	this.mc_pixel_tile_992 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_992.setTransform(300,220,2,2);

	this.mc_pixel_tile_993 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_993.setTransform(280,220,2,2);

	this.mc_pixel_tile_994 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_994.setTransform(260,220,2,2);

	this.mc_pixel_tile_995 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_995.setTransform(240,220,2,2);

	this.mc_pixel_tile_996 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_996.setTransform(220,220,2,2);

	this.mc_pixel_tile_997 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_997.setTransform(200,220,2,2);

	this.mc_pixel_tile_998 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_998.setTransform(180,220,2,2);

	this.mc_pixel_tile_999 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_999.setTransform(160,220,2,2);

	this.mc_pixel_tile_1000 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1000.setTransform(140,220,2,2);

	this.mc_pixel_tile_1001 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1001.setTransform(120,220,2,2);

	this.mc_pixel_tile_1002 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1002.setTransform(100,220,2,2);

	this.mc_pixel_tile_1003 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1003.setTransform(80,220,2,2);

	this.mc_pixel_tile_1004 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1004.setTransform(60,220,2,2);

	this.mc_pixel_tile_1005 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1005.setTransform(40,220,2,2);

	this.mc_pixel_tile_1006 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1006.setTransform(20,220,2,2);

	this.mc_pixel_tile_1007 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1007.setTransform(0,220,2,2);

	this.mc_pixel_tile_1008 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1008.setTransform(940,200,2,2);

	this.mc_pixel_tile_1009 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1009.setTransform(920,200,2,2);

	this.mc_pixel_tile_1010 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1010.setTransform(900,200,2,2);

	this.mc_pixel_tile_1011 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1011.setTransform(880,200,2,2);

	this.mc_pixel_tile_1012 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1012.setTransform(860,200,2,2);

	this.mc_pixel_tile_1013 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1013.setTransform(840,200,2,2);

	this.mc_pixel_tile_1014 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1014.setTransform(820,200,2,2);

	this.mc_pixel_tile_1015 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1015.setTransform(800,200,2,2);

	this.mc_pixel_tile_1016 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1016.setTransform(780,200,2,2);

	this.mc_pixel_tile_1017 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1017.setTransform(760,200,2,2);

	this.mc_pixel_tile_1018 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1018.setTransform(740,200,2,2);

	this.mc_pixel_tile_1019 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1019.setTransform(720,200,2,2);

	this.mc_pixel_tile_1020 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1020.setTransform(700,200,2,2);

	this.mc_pixel_tile_1021 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1021.setTransform(680,200,2,2);

	this.mc_pixel_tile_1022 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1022.setTransform(660,200,2,2);

	this.mc_pixel_tile_1023 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1023.setTransform(640,200,2,2);

	this.mc_pixel_tile_1024 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1024.setTransform(620,200,2,2);

	this.mc_pixel_tile_1025 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1025.setTransform(600,200,2,2);

	this.mc_pixel_tile_1026 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1026.setTransform(580,200,2,2);

	this.mc_pixel_tile_1027 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1027.setTransform(560,200,2,2);

	this.mc_pixel_tile_1028 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1028.setTransform(540,200,2,2);

	this.mc_pixel_tile_1029 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1029.setTransform(520,200,2,2);

	this.mc_pixel_tile_1030 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1030.setTransform(500,200,2,2);

	this.mc_pixel_tile_1031 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1031.setTransform(480,200,2,2);

	this.mc_pixel_tile_1032 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1032.setTransform(460,200,2,2);

	this.mc_pixel_tile_1033 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1033.setTransform(440,200,2,2);

	this.mc_pixel_tile_1034 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1034.setTransform(420,200,2,2);

	this.mc_pixel_tile_1035 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1035.setTransform(400,200,2,2);

	this.mc_pixel_tile_1036 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1036.setTransform(380,200,2,2);

	this.mc_pixel_tile_1037 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1037.setTransform(360,200,2,2);

	this.mc_pixel_tile_1038 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1038.setTransform(340,200,2,2);

	this.mc_pixel_tile_1039 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1039.setTransform(320,200,2,2);

	this.mc_pixel_tile_1040 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1040.setTransform(300,200,2,2);

	this.mc_pixel_tile_1041 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1041.setTransform(280,200,2,2);

	this.mc_pixel_tile_1042 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1042.setTransform(260,200,2,2);

	this.mc_pixel_tile_1043 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1043.setTransform(240,200,2,2);

	this.mc_pixel_tile_1044 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1044.setTransform(220,200,2,2);

	this.mc_pixel_tile_1045 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1045.setTransform(200,200,2,2);

	this.mc_pixel_tile_1046 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1046.setTransform(180,200,2,2);

	this.mc_pixel_tile_1047 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1047.setTransform(160,200,2,2);

	this.mc_pixel_tile_1048 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1048.setTransform(140,200,2,2);

	this.mc_pixel_tile_1049 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1049.setTransform(120,200,2,2);

	this.mc_pixel_tile_1050 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1050.setTransform(100,200,2,2);

	this.mc_pixel_tile_1051 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1051.setTransform(80,200,2,2);

	this.mc_pixel_tile_1052 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1052.setTransform(60,200,2,2);

	this.mc_pixel_tile_1053 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1053.setTransform(40,200,2,2);

	this.mc_pixel_tile_1054 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1054.setTransform(20,200,2,2);

	this.mc_pixel_tile_1055 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1055.setTransform(0,200,2,2);

	this.mc_pixel_tile_1056 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1056.setTransform(940,180,2,2);

	this.mc_pixel_tile_1057 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1057.setTransform(920,180,2,2);

	this.mc_pixel_tile_1058 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1058.setTransform(900,180,2,2);

	this.mc_pixel_tile_1059 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1059.setTransform(880,180,2,2);

	this.mc_pixel_tile_1060 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1060.setTransform(860,180,2,2);

	this.mc_pixel_tile_1061 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1061.setTransform(840,180,2,2);

	this.mc_pixel_tile_1062 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1062.setTransform(820,180,2,2);

	this.mc_pixel_tile_1063 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1063.setTransform(800,180,2,2);

	this.mc_pixel_tile_1064 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1064.setTransform(780,180,2,2);

	this.mc_pixel_tile_1065 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1065.setTransform(760,180,2,2);

	this.mc_pixel_tile_1066 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1066.setTransform(740,180,2,2);

	this.mc_pixel_tile_1067 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1067.setTransform(720,180,2,2);

	this.mc_pixel_tile_1068 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1068.setTransform(700,180,2,2);

	this.mc_pixel_tile_1069 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1069.setTransform(680,180,2,2);

	this.mc_pixel_tile_1070 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1070.setTransform(660,180,2,2);

	this.mc_pixel_tile_1071 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1071.setTransform(640,180,2,2);

	this.mc_pixel_tile_1072 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1072.setTransform(620,180,2,2);

	this.mc_pixel_tile_1073 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1073.setTransform(600,180,2,2);

	this.mc_pixel_tile_1074 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1074.setTransform(580,180,2,2);

	this.mc_pixel_tile_1075 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1075.setTransform(560,180,2,2);

	this.mc_pixel_tile_1076 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1076.setTransform(540,180,2,2);

	this.mc_pixel_tile_1077 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1077.setTransform(520,180,2,2);

	this.mc_pixel_tile_1078 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1078.setTransform(500,180,2,2);

	this.mc_pixel_tile_1079 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1079.setTransform(480,180,2,2);

	this.mc_pixel_tile_1080 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1080.setTransform(460,180,2,2);

	this.mc_pixel_tile_1081 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1081.setTransform(440,180,2,2);

	this.mc_pixel_tile_1082 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1082.setTransform(420,180,2,2);

	this.mc_pixel_tile_1083 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1083.setTransform(400,180,2,2);

	this.mc_pixel_tile_1084 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1084.setTransform(380,180,2,2);

	this.mc_pixel_tile_1085 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1085.setTransform(360,180,2,2);

	this.mc_pixel_tile_1086 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1086.setTransform(340,180,2,2);

	this.mc_pixel_tile_1087 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1087.setTransform(320,180,2,2);

	this.mc_pixel_tile_1088 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1088.setTransform(300,180,2,2);

	this.mc_pixel_tile_1089 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1089.setTransform(280,180,2,2);

	this.mc_pixel_tile_1090 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1090.setTransform(260,180,2,2);

	this.mc_pixel_tile_1091 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1091.setTransform(240,180,2,2);

	this.mc_pixel_tile_1092 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1092.setTransform(220,180,2,2);

	this.mc_pixel_tile_1093 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1093.setTransform(200,180,2,2);

	this.mc_pixel_tile_1094 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1094.setTransform(180,180,2,2);

	this.mc_pixel_tile_1095 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1095.setTransform(160,180,2,2);

	this.mc_pixel_tile_1096 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1096.setTransform(140,180,2,2);

	this.mc_pixel_tile_1097 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1097.setTransform(120,180,2,2);

	this.mc_pixel_tile_1098 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1098.setTransform(100,180,2,2);

	this.mc_pixel_tile_1099 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1099.setTransform(80,180,2,2);

	this.mc_pixel_tile_1100 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1100.setTransform(60,180,2,2);

	this.mc_pixel_tile_1101 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1101.setTransform(40,180,2,2);

	this.mc_pixel_tile_1102 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1102.setTransform(20,180,2,2);

	this.mc_pixel_tile_1103 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1103.setTransform(0,180,2,2);

	this.mc_pixel_tile_1104 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1104.setTransform(940,160,2,2);

	this.mc_pixel_tile_1105 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1105.setTransform(920,160,2,2);

	this.mc_pixel_tile_1106 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1106.setTransform(900,160,2,2);

	this.mc_pixel_tile_1107 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1107.setTransform(880,160,2,2);

	this.mc_pixel_tile_1108 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1108.setTransform(860,160,2,2);

	this.mc_pixel_tile_1109 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1109.setTransform(840,160,2,2);

	this.mc_pixel_tile_1110 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1110.setTransform(820,160,2,2);

	this.mc_pixel_tile_1111 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1111.setTransform(800,160,2,2);

	this.mc_pixel_tile_1112 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1112.setTransform(780,160,2,2);

	this.mc_pixel_tile_1113 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1113.setTransform(760,160,2,2);

	this.mc_pixel_tile_1114 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1114.setTransform(740,160,2,2);

	this.mc_pixel_tile_1115 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1115.setTransform(720,160,2,2);

	this.mc_pixel_tile_1116 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1116.setTransform(700,160,2,2);

	this.mc_pixel_tile_1117 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1117.setTransform(680,160,2,2);

	this.mc_pixel_tile_1118 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1118.setTransform(660,160,2,2);

	this.mc_pixel_tile_1119 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1119.setTransform(640,160,2,2);

	this.mc_pixel_tile_1120 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1120.setTransform(620,160,2,2);

	this.mc_pixel_tile_1121 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1121.setTransform(600,160,2,2);

	this.mc_pixel_tile_1122 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1122.setTransform(580,160,2,2);

	this.mc_pixel_tile_1123 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1123.setTransform(560,160,2,2);

	this.mc_pixel_tile_1124 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1124.setTransform(540,160,2,2);

	this.mc_pixel_tile_1125 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1125.setTransform(520,160,2,2);

	this.mc_pixel_tile_1126 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1126.setTransform(500,160,2,2);

	this.mc_pixel_tile_1127 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1127.setTransform(480,160,2,2);

	this.mc_pixel_tile_1128 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1128.setTransform(460,160,2,2);

	this.mc_pixel_tile_1129 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1129.setTransform(440,160,2,2);

	this.mc_pixel_tile_1130 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1130.setTransform(420,160,2,2);

	this.mc_pixel_tile_1131 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1131.setTransform(400,160,2,2);

	this.mc_pixel_tile_1132 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1132.setTransform(380,160,2,2);

	this.mc_pixel_tile_1133 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1133.setTransform(360,160,2,2);

	this.mc_pixel_tile_1134 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1134.setTransform(340,160,2,2);

	this.mc_pixel_tile_1135 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1135.setTransform(320,160,2,2);

	this.mc_pixel_tile_1136 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1136.setTransform(300,160,2,2);

	this.mc_pixel_tile_1137 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1137.setTransform(280,160,2,2);

	this.mc_pixel_tile_1138 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1138.setTransform(260,160,2,2);

	this.mc_pixel_tile_1139 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1139.setTransform(240,160,2,2);

	this.mc_pixel_tile_1140 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1140.setTransform(220,160,2,2);

	this.mc_pixel_tile_1141 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1141.setTransform(200,160,2,2);

	this.mc_pixel_tile_1142 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1142.setTransform(180,160,2,2);

	this.mc_pixel_tile_1143 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1143.setTransform(160,160,2,2);

	this.mc_pixel_tile_1144 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1144.setTransform(140,160,2,2);

	this.mc_pixel_tile_1145 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1145.setTransform(120,160,2,2);

	this.mc_pixel_tile_1146 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1146.setTransform(100,160,2,2);

	this.mc_pixel_tile_1147 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1147.setTransform(80,160,2,2);

	this.mc_pixel_tile_1148 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1148.setTransform(60,160,2,2);

	this.mc_pixel_tile_1149 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1149.setTransform(40,160,2,2);

	this.mc_pixel_tile_1150 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1150.setTransform(20,160,2,2);

	this.mc_pixel_tile_1151 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1151.setTransform(0,160,2,2);

	this.mc_pixel_tile_1152 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1152.setTransform(940,140,2,2);

	this.mc_pixel_tile_1153 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1153.setTransform(920,140,2,2);

	this.mc_pixel_tile_1154 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1154.setTransform(900,140,2,2);

	this.mc_pixel_tile_1155 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1155.setTransform(880,140,2,2);

	this.mc_pixel_tile_1156 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1156.setTransform(860,140,2,2);

	this.mc_pixel_tile_1157 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1157.setTransform(840,140,2,2);

	this.mc_pixel_tile_1158 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1158.setTransform(820,140,2,2);

	this.mc_pixel_tile_1159 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1159.setTransform(800,140,2,2);

	this.mc_pixel_tile_1160 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1160.setTransform(780,140,2,2);

	this.mc_pixel_tile_1161 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1161.setTransform(760,140,2,2);

	this.mc_pixel_tile_1162 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1162.setTransform(740,140,2,2);

	this.mc_pixel_tile_1163 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1163.setTransform(720,140,2,2);

	this.mc_pixel_tile_1164 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1164.setTransform(700,140,2,2);

	this.mc_pixel_tile_1165 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1165.setTransform(680,140,2,2);

	this.mc_pixel_tile_1166 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1166.setTransform(660,140,2,2);

	this.mc_pixel_tile_1167 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1167.setTransform(640,140,2,2);

	this.mc_pixel_tile_1168 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1168.setTransform(620,140,2,2);

	this.mc_pixel_tile_1169 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1169.setTransform(600,140,2,2);

	this.mc_pixel_tile_1170 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1170.setTransform(580,140,2,2);

	this.mc_pixel_tile_1171 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1171.setTransform(560,140,2,2);

	this.mc_pixel_tile_1172 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1172.setTransform(540,140,2,2);

	this.mc_pixel_tile_1173 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1173.setTransform(520,140,2,2);

	this.mc_pixel_tile_1174 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1174.setTransform(500,140,2,2);

	this.mc_pixel_tile_1175 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1175.setTransform(480,140,2,2);

	this.mc_pixel_tile_1176 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1176.setTransform(460,140,2,2);

	this.mc_pixel_tile_1177 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1177.setTransform(440,140,2,2);

	this.mc_pixel_tile_1178 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1178.setTransform(420,140,2,2);

	this.mc_pixel_tile_1179 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1179.setTransform(400,140,2,2);

	this.mc_pixel_tile_1180 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1180.setTransform(380,140,2,2);

	this.mc_pixel_tile_1181 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1181.setTransform(360,140,2,2);

	this.mc_pixel_tile_1182 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1182.setTransform(340,140,2,2);

	this.mc_pixel_tile_1183 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1183.setTransform(320,140,2,2);

	this.mc_pixel_tile_1184 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1184.setTransform(300,140,2,2);

	this.mc_pixel_tile_1185 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1185.setTransform(280,140,2,2);

	this.mc_pixel_tile_1186 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1186.setTransform(260,140,2,2);

	this.mc_pixel_tile_1187 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1187.setTransform(240,140,2,2);

	this.mc_pixel_tile_1188 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1188.setTransform(220,140,2,2);

	this.mc_pixel_tile_1189 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1189.setTransform(200,140,2,2);

	this.mc_pixel_tile_1190 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1190.setTransform(180,140,2,2);

	this.mc_pixel_tile_1191 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1191.setTransform(160,140,2,2);

	this.mc_pixel_tile_1192 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1192.setTransform(140,140,2,2);

	this.mc_pixel_tile_1193 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1193.setTransform(120,140,2,2);

	this.mc_pixel_tile_1194 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1194.setTransform(100,140,2,2);

	this.mc_pixel_tile_1195 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1195.setTransform(80,140,2,2);

	this.mc_pixel_tile_1196 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1196.setTransform(60,140,2,2);

	this.mc_pixel_tile_1197 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1197.setTransform(40,140,2,2);

	this.mc_pixel_tile_1198 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1198.setTransform(20,140,2,2);

	this.mc_pixel_tile_1199 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1199.setTransform(0,140,2,2);

	this.mc_pixel_tile_1200 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1200.setTransform(940,120,2,2);

	this.mc_pixel_tile_1201 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1201.setTransform(920,120,2,2);

	this.mc_pixel_tile_1202 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1202.setTransform(900,120,2,2);

	this.mc_pixel_tile_1203 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1203.setTransform(880,120,2,2);

	this.mc_pixel_tile_1204 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1204.setTransform(860,120,2,2);

	this.mc_pixel_tile_1205 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1205.setTransform(840,120,2,2);

	this.mc_pixel_tile_1206 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1206.setTransform(820,120,2,2);

	this.mc_pixel_tile_1207 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1207.setTransform(800,120,2,2);

	this.mc_pixel_tile_1208 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1208.setTransform(780,120,2,2);

	this.mc_pixel_tile_1209 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1209.setTransform(760,120,2,2);

	this.mc_pixel_tile_1210 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1210.setTransform(740,120,2,2);

	this.mc_pixel_tile_1211 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1211.setTransform(720,120,2,2);

	this.mc_pixel_tile_1212 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1212.setTransform(700,120,2,2);

	this.mc_pixel_tile_1213 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1213.setTransform(680,120,2,2);

	this.mc_pixel_tile_1214 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1214.setTransform(660,120,2,2);

	this.mc_pixel_tile_1215 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1215.setTransform(640,120,2,2);

	this.mc_pixel_tile_1216 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1216.setTransform(620,120,2,2);

	this.mc_pixel_tile_1217 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1217.setTransform(600,120,2,2);

	this.mc_pixel_tile_1218 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1218.setTransform(580,120,2,2);

	this.mc_pixel_tile_1219 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1219.setTransform(560,120,2,2);

	this.mc_pixel_tile_1220 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1220.setTransform(540,120,2,2);

	this.mc_pixel_tile_1221 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1221.setTransform(520,120,2,2);

	this.mc_pixel_tile_1222 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1222.setTransform(500,120,2,2);

	this.mc_pixel_tile_1223 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1223.setTransform(480,120,2,2);

	this.mc_pixel_tile_1224 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1224.setTransform(460,120,2,2);

	this.mc_pixel_tile_1225 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1225.setTransform(440,120,2,2);

	this.mc_pixel_tile_1226 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1226.setTransform(420,120,2,2);

	this.mc_pixel_tile_1227 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1227.setTransform(400,120,2,2);

	this.mc_pixel_tile_1228 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1228.setTransform(380,120,2,2);

	this.mc_pixel_tile_1229 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1229.setTransform(360,120,2,2);

	this.mc_pixel_tile_1230 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1230.setTransform(340,120,2,2);

	this.mc_pixel_tile_1231 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1231.setTransform(320,120,2,2);

	this.mc_pixel_tile_1232 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1232.setTransform(300,120,2,2);

	this.mc_pixel_tile_1233 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1233.setTransform(280,120,2,2);

	this.mc_pixel_tile_1234 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1234.setTransform(260,120,2,2);

	this.mc_pixel_tile_1235 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1235.setTransform(240,120,2,2);

	this.mc_pixel_tile_1236 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1236.setTransform(220,120,2,2);

	this.mc_pixel_tile_1237 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1237.setTransform(200,120,2,2);

	this.mc_pixel_tile_1238 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1238.setTransform(180,120,2,2);

	this.mc_pixel_tile_1239 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1239.setTransform(160,120,2,2);

	this.mc_pixel_tile_1240 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1240.setTransform(140,120,2,2);

	this.mc_pixel_tile_1241 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1241.setTransform(120,120,2,2);

	this.mc_pixel_tile_1242 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1242.setTransform(100,120,2,2);

	this.mc_pixel_tile_1243 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1243.setTransform(80,120,2,2);

	this.mc_pixel_tile_1244 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1244.setTransform(60,120,2,2);

	this.mc_pixel_tile_1245 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1245.setTransform(40,120,2,2);

	this.mc_pixel_tile_1246 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1246.setTransform(20,120,2,2);

	this.mc_pixel_tile_1247 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1247.setTransform(0,120,2,2);

	this.mc_pixel_tile_1248 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1248.setTransform(940,100,2,2);

	this.mc_pixel_tile_1249 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1249.setTransform(920,100,2,2);

	this.mc_pixel_tile_1250 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1250.setTransform(900,100,2,2);

	this.mc_pixel_tile_1251 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1251.setTransform(880,100,2,2);

	this.mc_pixel_tile_1252 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1252.setTransform(860,100,2,2);

	this.mc_pixel_tile_1253 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1253.setTransform(840,100,2,2);

	this.mc_pixel_tile_1254 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1254.setTransform(820,100,2,2);

	this.mc_pixel_tile_1255 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1255.setTransform(800,100,2,2);

	this.mc_pixel_tile_1256 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1256.setTransform(780,100,2,2);

	this.mc_pixel_tile_1257 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1257.setTransform(760,100,2,2);

	this.mc_pixel_tile_1258 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1258.setTransform(740,100,2,2);

	this.mc_pixel_tile_1259 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1259.setTransform(720,100,2,2);

	this.mc_pixel_tile_1260 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1260.setTransform(700,100,2,2);

	this.mc_pixel_tile_1261 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1261.setTransform(680,100,2,2);

	this.mc_pixel_tile_1262 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1262.setTransform(660,100,2,2);

	this.mc_pixel_tile_1263 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1263.setTransform(640,100,2,2);

	this.mc_pixel_tile_1264 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1264.setTransform(620,100,2,2);

	this.mc_pixel_tile_1265 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1265.setTransform(600,100,2,2);

	this.mc_pixel_tile_1266 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1266.setTransform(580,100,2,2);

	this.mc_pixel_tile_1267 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1267.setTransform(560,100,2,2);

	this.mc_pixel_tile_1268 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1268.setTransform(540,100,2,2);

	this.mc_pixel_tile_1269 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1269.setTransform(520,100,2,2);

	this.mc_pixel_tile_1270 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1270.setTransform(500,100,2,2);

	this.mc_pixel_tile_1271 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1271.setTransform(480,100,2,2);

	this.mc_pixel_tile_1272 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1272.setTransform(460,100,2,2);

	this.mc_pixel_tile_1273 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1273.setTransform(440,100,2,2);

	this.mc_pixel_tile_1274 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1274.setTransform(420,100,2,2);

	this.mc_pixel_tile_1275 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1275.setTransform(400,100,2,2);

	this.mc_pixel_tile_1276 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1276.setTransform(380,100,2,2);

	this.mc_pixel_tile_1277 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1277.setTransform(360,100,2,2);

	this.mc_pixel_tile_1278 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1278.setTransform(340,100,2,2);

	this.mc_pixel_tile_1279 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1279.setTransform(320,100,2,2);

	this.mc_pixel_tile_1280 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1280.setTransform(300,100,2,2);

	this.mc_pixel_tile_1281 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1281.setTransform(280,100,2,2);

	this.mc_pixel_tile_1282 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1282.setTransform(260,100,2,2);

	this.mc_pixel_tile_1283 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1283.setTransform(240,100,2,2);

	this.mc_pixel_tile_1284 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1284.setTransform(220,100,2,2);

	this.mc_pixel_tile_1285 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1285.setTransform(200,100,2,2);

	this.mc_pixel_tile_1286 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1286.setTransform(180,100,2,2);

	this.mc_pixel_tile_1287 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1287.setTransform(160,100,2,2);

	this.mc_pixel_tile_1288 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1288.setTransform(140,100,2,2);

	this.mc_pixel_tile_1289 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1289.setTransform(120,100,2,2);

	this.mc_pixel_tile_1290 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1290.setTransform(100,100,2,2);

	this.mc_pixel_tile_1291 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1291.setTransform(80,100,2,2);

	this.mc_pixel_tile_1292 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1292.setTransform(60,100,2,2);

	this.mc_pixel_tile_1293 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1293.setTransform(40,100,2,2);

	this.mc_pixel_tile_1294 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1294.setTransform(20,100,2,2);

	this.mc_pixel_tile_1295 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1295.setTransform(0,100,2,2);

	this.mc_pixel_tile_1296 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1296.setTransform(940,80,2,2);

	this.mc_pixel_tile_1297 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1297.setTransform(920,80,2,2);

	this.mc_pixel_tile_1298 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1298.setTransform(900,80,2,2);

	this.mc_pixel_tile_1299 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1299.setTransform(880,80,2,2);

	this.mc_pixel_tile_1300 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1300.setTransform(860,80,2,2);

	this.mc_pixel_tile_1301 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1301.setTransform(840,80,2,2);

	this.mc_pixel_tile_1302 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1302.setTransform(820,80,2,2);

	this.mc_pixel_tile_1303 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1303.setTransform(800,80,2,2);

	this.mc_pixel_tile_1304 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1304.setTransform(780,80,2,2);

	this.mc_pixel_tile_1305 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1305.setTransform(760,80,2,2);

	this.mc_pixel_tile_1306 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1306.setTransform(740,80,2,2);

	this.mc_pixel_tile_1307 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1307.setTransform(720,80,2,2);

	this.mc_pixel_tile_1308 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1308.setTransform(700,80,2,2);

	this.mc_pixel_tile_1309 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1309.setTransform(680,80,2,2);

	this.mc_pixel_tile_1310 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1310.setTransform(660,80,2,2);

	this.mc_pixel_tile_1311 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1311.setTransform(640,80,2,2);

	this.mc_pixel_tile_1312 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1312.setTransform(620,80,2,2);

	this.mc_pixel_tile_1313 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1313.setTransform(600,80,2,2);

	this.mc_pixel_tile_1314 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1314.setTransform(580,80,2,2);

	this.mc_pixel_tile_1315 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1315.setTransform(560,80,2,2);

	this.mc_pixel_tile_1316 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1316.setTransform(540,80,2,2);

	this.mc_pixel_tile_1317 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1317.setTransform(520,80,2,2);

	this.mc_pixel_tile_1318 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1318.setTransform(500,80,2,2);

	this.mc_pixel_tile_1319 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1319.setTransform(480,80,2,2);

	this.mc_pixel_tile_1320 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1320.setTransform(460,80,2,2);

	this.mc_pixel_tile_1321 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1321.setTransform(440,80,2,2);

	this.mc_pixel_tile_1322 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1322.setTransform(420,80,2,2);

	this.mc_pixel_tile_1323 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1323.setTransform(400,80,2,2);

	this.mc_pixel_tile_1324 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1324.setTransform(380,80,2,2);

	this.mc_pixel_tile_1325 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1325.setTransform(360,80,2,2);

	this.mc_pixel_tile_1326 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1326.setTransform(340,80,2,2);

	this.mc_pixel_tile_1327 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1327.setTransform(320,80,2,2);

	this.mc_pixel_tile_1328 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1328.setTransform(300,80,2,2);

	this.mc_pixel_tile_1329 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1329.setTransform(280,80,2,2);

	this.mc_pixel_tile_1330 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1330.setTransform(260,80,2,2);

	this.mc_pixel_tile_1331 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1331.setTransform(240,80,2,2);

	this.mc_pixel_tile_1332 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1332.setTransform(220,80,2,2);

	this.mc_pixel_tile_1333 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1333.setTransform(200,80,2,2);

	this.mc_pixel_tile_1334 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1334.setTransform(180,80,2,2);

	this.mc_pixel_tile_1335 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1335.setTransform(160,80,2,2);

	this.mc_pixel_tile_1336 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1336.setTransform(140,80,2,2);

	this.mc_pixel_tile_1337 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1337.setTransform(120,80,2,2);

	this.mc_pixel_tile_1338 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1338.setTransform(100,80,2,2);

	this.mc_pixel_tile_1339 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1339.setTransform(80,80,2,2);

	this.mc_pixel_tile_1340 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1340.setTransform(60,80,2,2);

	this.mc_pixel_tile_1341 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1341.setTransform(40,80,2,2);

	this.mc_pixel_tile_1342 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1342.setTransform(20,80,2,2);

	this.mc_pixel_tile_1343 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1343.setTransform(0,80,2,2);

	this.mc_pixel_tile_1344 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1344.setTransform(940,60,2,2);

	this.mc_pixel_tile_1345 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1345.setTransform(920,60,2,2);

	this.mc_pixel_tile_1346 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1346.setTransform(900,60,2,2);

	this.mc_pixel_tile_1347 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1347.setTransform(880,60,2,2);

	this.mc_pixel_tile_1348 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1348.setTransform(860,60,2,2);

	this.mc_pixel_tile_1349 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1349.setTransform(840,60,2,2);

	this.mc_pixel_tile_1350 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1350.setTransform(820,60,2,2);

	this.mc_pixel_tile_1351 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1351.setTransform(800,60,2,2);

	this.mc_pixel_tile_1352 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1352.setTransform(780,60,2,2);

	this.mc_pixel_tile_1353 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1353.setTransform(760,60,2,2);

	this.mc_pixel_tile_1354 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1354.setTransform(740,60,2,2);

	this.mc_pixel_tile_1355 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1355.setTransform(720,60,2,2);

	this.mc_pixel_tile_1356 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1356.setTransform(700,60,2,2);

	this.mc_pixel_tile_1357 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1357.setTransform(680,60,2,2);

	this.mc_pixel_tile_1358 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1358.setTransform(660,60,2,2);

	this.mc_pixel_tile_1359 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1359.setTransform(640,60,2,2);

	this.mc_pixel_tile_1360 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1360.setTransform(620,60,2,2);

	this.mc_pixel_tile_1361 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1361.setTransform(600,60,2,2);

	this.mc_pixel_tile_1362 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1362.setTransform(580,60,2,2);

	this.mc_pixel_tile_1363 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1363.setTransform(560,60,2,2);

	this.mc_pixel_tile_1364 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1364.setTransform(540,60,2,2);

	this.mc_pixel_tile_1365 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1365.setTransform(520,60,2,2);

	this.mc_pixel_tile_1366 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1366.setTransform(500,60,2,2);

	this.mc_pixel_tile_1367 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1367.setTransform(480,60,2,2);

	this.mc_pixel_tile_1368 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1368.setTransform(460,60,2,2);

	this.mc_pixel_tile_1369 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1369.setTransform(440,60,2,2);

	this.mc_pixel_tile_1370 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1370.setTransform(420,60,2,2);

	this.mc_pixel_tile_1371 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1371.setTransform(400,60,2,2);

	this.mc_pixel_tile_1372 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1372.setTransform(380,60,2,2);

	this.mc_pixel_tile_1373 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1373.setTransform(360,60,2,2);

	this.mc_pixel_tile_1374 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1374.setTransform(340,60,2,2);

	this.mc_pixel_tile_1375 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1375.setTransform(320,60,2,2);

	this.mc_pixel_tile_1376 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1376.setTransform(300,60,2,2);

	this.mc_pixel_tile_1377 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1377.setTransform(280,60,2,2);

	this.mc_pixel_tile_1378 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1378.setTransform(260,60,2,2);

	this.mc_pixel_tile_1379 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1379.setTransform(240,60,2,2);

	this.mc_pixel_tile_1380 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1380.setTransform(220,60,2,2);

	this.mc_pixel_tile_1381 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1381.setTransform(200,60,2,2);

	this.mc_pixel_tile_1382 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1382.setTransform(180,60,2,2);

	this.mc_pixel_tile_1383 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1383.setTransform(160,60,2,2);

	this.mc_pixel_tile_1384 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1384.setTransform(140,60,2,2);

	this.mc_pixel_tile_1385 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1385.setTransform(120,60,2,2);

	this.mc_pixel_tile_1386 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1386.setTransform(100,60,2,2);

	this.mc_pixel_tile_1387 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1387.setTransform(80,60,2,2);

	this.mc_pixel_tile_1388 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1388.setTransform(60,60,2,2);

	this.mc_pixel_tile_1389 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1389.setTransform(40,60,2,2);

	this.mc_pixel_tile_1390 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1390.setTransform(20,60,2,2);

	this.mc_pixel_tile_1391 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1391.setTransform(0,60,2,2);

	this.mc_pixel_tile_1392 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1392.setTransform(940,40,2,2);

	this.mc_pixel_tile_1393 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1393.setTransform(920,40,2,2);

	this.mc_pixel_tile_1394 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1394.setTransform(900,40,2,2);

	this.mc_pixel_tile_1395 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1395.setTransform(880,40,2,2);

	this.mc_pixel_tile_1396 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1396.setTransform(860,40,2,2);

	this.mc_pixel_tile_1397 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1397.setTransform(840,40,2,2);

	this.mc_pixel_tile_1398 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1398.setTransform(820,40,2,2);

	this.mc_pixel_tile_1399 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1399.setTransform(800,40,2,2);

	this.mc_pixel_tile_1400 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1400.setTransform(780,40,2,2);

	this.mc_pixel_tile_1401 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1401.setTransform(760,40,2,2);

	this.mc_pixel_tile_1402 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1402.setTransform(740,40,2,2);

	this.mc_pixel_tile_1403 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1403.setTransform(720,40,2,2);

	this.mc_pixel_tile_1404 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1404.setTransform(700,40,2,2);

	this.mc_pixel_tile_1405 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1405.setTransform(680,40,2,2);

	this.mc_pixel_tile_1406 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1406.setTransform(660,40,2,2);

	this.mc_pixel_tile_1407 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1407.setTransform(640,40,2,2);

	this.mc_pixel_tile_1408 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1408.setTransform(620,40,2,2);

	this.mc_pixel_tile_1409 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1409.setTransform(600,40,2,2);

	this.mc_pixel_tile_1410 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1410.setTransform(580,40,2,2);

	this.mc_pixel_tile_1411 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1411.setTransform(560,40,2,2);

	this.mc_pixel_tile_1412 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1412.setTransform(540,40,2,2);

	this.mc_pixel_tile_1413 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1413.setTransform(520,40,2,2);

	this.mc_pixel_tile_1414 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1414.setTransform(500,40,2,2);

	this.mc_pixel_tile_1415 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1415.setTransform(480,40,2,2);

	this.mc_pixel_tile_1416 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1416.setTransform(460,40,2,2);

	this.mc_pixel_tile_1417 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1417.setTransform(440,40,2,2);

	this.mc_pixel_tile_1418 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1418.setTransform(420,40,2,2);

	this.mc_pixel_tile_1419 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1419.setTransform(400,40,2,2);

	this.mc_pixel_tile_1420 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1420.setTransform(380,40,2,2);

	this.mc_pixel_tile_1421 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1421.setTransform(360,40,2,2);

	this.mc_pixel_tile_1422 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1422.setTransform(340,40,2,2);

	this.mc_pixel_tile_1423 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1423.setTransform(320,40,2,2);

	this.mc_pixel_tile_1424 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1424.setTransform(300,40,2,2);

	this.mc_pixel_tile_1425 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1425.setTransform(280,40,2,2);

	this.mc_pixel_tile_1426 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1426.setTransform(260,40,2,2);

	this.mc_pixel_tile_1427 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1427.setTransform(240,40,2,2);

	this.mc_pixel_tile_1428 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1428.setTransform(220,40,2,2);

	this.mc_pixel_tile_1429 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1429.setTransform(200,40,2,2);

	this.mc_pixel_tile_1430 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1430.setTransform(180,40,2,2);

	this.mc_pixel_tile_1431 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1431.setTransform(160,40,2,2);

	this.mc_pixel_tile_1432 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1432.setTransform(140,40,2,2);

	this.mc_pixel_tile_1433 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1433.setTransform(120,40,2,2);

	this.mc_pixel_tile_1434 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1434.setTransform(100,40,2,2);

	this.mc_pixel_tile_1435 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1435.setTransform(80,40,2,2);

	this.mc_pixel_tile_1436 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1436.setTransform(60,40,2,2);

	this.mc_pixel_tile_1437 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1437.setTransform(40,40,2,2);

	this.mc_pixel_tile_1438 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1438.setTransform(20,40,2,2);

	this.mc_pixel_tile_1439 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1439.setTransform(0,40,2,2);

	this.mc_pixel_tile_1440 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1440.setTransform(940,20,2,2);

	this.mc_pixel_tile_1441 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1441.setTransform(920,20,2,2);

	this.mc_pixel_tile_1442 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1442.setTransform(900,20,2,2);

	this.mc_pixel_tile_1443 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1443.setTransform(880,20,2,2);

	this.mc_pixel_tile_1444 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1444.setTransform(860,20,2,2);

	this.mc_pixel_tile_1445 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1445.setTransform(840,20,2,2);

	this.mc_pixel_tile_1446 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1446.setTransform(820,20,2,2);

	this.mc_pixel_tile_1447 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1447.setTransform(800,20,2,2);

	this.mc_pixel_tile_1448 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1448.setTransform(780,20,2,2);

	this.mc_pixel_tile_1449 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1449.setTransform(760,20,2,2);

	this.mc_pixel_tile_1450 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1450.setTransform(740,20,2,2);

	this.mc_pixel_tile_1451 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1451.setTransform(720,20,2,2);

	this.mc_pixel_tile_1452 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1452.setTransform(700,20,2,2);

	this.mc_pixel_tile_1453 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1453.setTransform(680,20,2,2);

	this.mc_pixel_tile_1454 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1454.setTransform(660,20,2,2);

	this.mc_pixel_tile_1455 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1455.setTransform(640,20,2,2);

	this.mc_pixel_tile_1456 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1456.setTransform(620,20,2,2);

	this.mc_pixel_tile_1457 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1457.setTransform(600,20,2,2);

	this.mc_pixel_tile_1458 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1458.setTransform(580,20,2,2);

	this.mc_pixel_tile_1459 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1459.setTransform(560,20,2,2);

	this.mc_pixel_tile_1460 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1460.setTransform(540,20,2,2);

	this.mc_pixel_tile_1461 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1461.setTransform(520,20,2,2);

	this.mc_pixel_tile_1462 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1462.setTransform(500,20,2,2);

	this.mc_pixel_tile_1463 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1463.setTransform(480,20,2,2);

	this.mc_pixel_tile_1464 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1464.setTransform(460,20,2,2);

	this.mc_pixel_tile_1465 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1465.setTransform(440,20,2,2);

	this.mc_pixel_tile_1466 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1466.setTransform(420,20,2,2);

	this.mc_pixel_tile_1467 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1467.setTransform(400,20,2,2);

	this.mc_pixel_tile_1468 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1468.setTransform(380,20,2,2);

	this.mc_pixel_tile_1469 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1469.setTransform(360,20,2,2);

	this.mc_pixel_tile_1470 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1470.setTransform(340,20,2,2);

	this.mc_pixel_tile_1471 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1471.setTransform(320,20,2,2);

	this.mc_pixel_tile_1472 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1472.setTransform(300,20,2,2);

	this.mc_pixel_tile_1473 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1473.setTransform(280,20,2,2);

	this.mc_pixel_tile_1474 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1474.setTransform(260,20,2,2);

	this.mc_pixel_tile_1475 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1475.setTransform(240,20,2,2);

	this.mc_pixel_tile_1476 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1476.setTransform(220,20,2,2);

	this.mc_pixel_tile_1477 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1477.setTransform(200,20,2,2);

	this.mc_pixel_tile_1478 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1478.setTransform(180,20,2,2);

	this.mc_pixel_tile_1479 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1479.setTransform(160,20,2,2);

	this.mc_pixel_tile_1480 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1480.setTransform(140,20,2,2);

	this.mc_pixel_tile_1481 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1481.setTransform(120,20,2,2);

	this.mc_pixel_tile_1482 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1482.setTransform(100,20,2,2);

	this.mc_pixel_tile_1483 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1483.setTransform(80,20,2,2);

	this.mc_pixel_tile_1484 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1484.setTransform(60,20,2,2);

	this.mc_pixel_tile_1485 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1485.setTransform(40,20,2,2);

	this.mc_pixel_tile_1486 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1486.setTransform(20,20,2,2);

	this.mc_pixel_tile_1487 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1487.setTransform(0,20,2,2);

	this.mc_pixel_tile_1488 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1488.setTransform(940,0,2,2);

	this.mc_pixel_tile_1489 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1489.setTransform(920,0,2,2);

	this.mc_pixel_tile_1490 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1490.setTransform(900,0,2,2);

	this.mc_pixel_tile_1491 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1491.setTransform(880,0,2,2);

	this.mc_pixel_tile_1492 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1492.setTransform(860,0,2,2);

	this.mc_pixel_tile_1493 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1493.setTransform(840,0,2,2);

	this.mc_pixel_tile_1494 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1494.setTransform(820,0,2,2);

	this.mc_pixel_tile_1495 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1495.setTransform(800,0,2,2);

	this.mc_pixel_tile_1496 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1496.setTransform(780,0,2,2);

	this.mc_pixel_tile_1497 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1497.setTransform(760,0,2,2);

	this.mc_pixel_tile_1498 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1498.setTransform(740,0,2,2);

	this.mc_pixel_tile_1499 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1499.setTransform(720,0,2,2);

	this.mc_pixel_tile_1500 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1500.setTransform(700,0,2,2);

	this.mc_pixel_tile_1501 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1501.setTransform(680,0,2,2);

	this.mc_pixel_tile_1502 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1502.setTransform(660,0,2,2);

	this.mc_pixel_tile_1503 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1503.setTransform(640,0,2,2);

	this.mc_pixel_tile_1504 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1504.setTransform(620,0,2,2);

	this.mc_pixel_tile_1505 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1505.setTransform(600,0,2,2);

	this.mc_pixel_tile_1506 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1506.setTransform(580,0,2,2);

	this.mc_pixel_tile_1507 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1507.setTransform(560,0,2,2);

	this.mc_pixel_tile_1508 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1508.setTransform(540,0,2,2);

	this.mc_pixel_tile_1509 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1509.setTransform(520,0,2,2);

	this.mc_pixel_tile_1510 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1510.setTransform(500,0,2,2);

	this.mc_pixel_tile_1511 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1511.setTransform(480,0,2,2);

	this.mc_pixel_tile_1512 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1512.setTransform(460,0,2,2);

	this.mc_pixel_tile_1513 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1513.setTransform(440,0,2,2);

	this.mc_pixel_tile_1514 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1514.setTransform(420,0,2,2);

	this.mc_pixel_tile_1515 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1515.setTransform(400,0,2,2);

	this.mc_pixel_tile_1516 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1516.setTransform(380,0,2,2);

	this.mc_pixel_tile_1517 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1517.setTransform(360,0,2,2);

	this.mc_pixel_tile_1518 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1518.setTransform(340,0,2,2);

	this.mc_pixel_tile_1519 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1519.setTransform(320,0,2,2);

	this.mc_pixel_tile_1520 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1520.setTransform(300,0,2,2);

	this.mc_pixel_tile_1521 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1521.setTransform(280,0,2,2);

	this.mc_pixel_tile_1522 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1522.setTransform(260,0,2,2);

	this.mc_pixel_tile_1523 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1523.setTransform(240,0,2,2);

	this.mc_pixel_tile_1524 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1524.setTransform(220,0,2,2);

	this.mc_pixel_tile_1525 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1525.setTransform(200,0,2,2);

	this.mc_pixel_tile_1526 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1526.setTransform(180,0,2,2);

	this.mc_pixel_tile_1527 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1527.setTransform(160,0,2,2);

	this.mc_pixel_tile_1528 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1528.setTransform(140,0,2,2);

	this.mc_pixel_tile_1529 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1529.setTransform(120,0,2,2);

	this.mc_pixel_tile_1530 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1530.setTransform(100,0,2,2);

	this.mc_pixel_tile_1531 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1531.setTransform(80,0,2,2);

	this.mc_pixel_tile_1532 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1532.setTransform(60,0,2,2);

	this.mc_pixel_tile_1533 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1533.setTransform(40,0,2,2);

	this.mc_pixel_tile_1534 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1534.setTransform(20,0,2,2);

	this.mc_pixel_tile_1535 = new lib.TILE_PIXEL();
	this.mc_pixel_tile_1535.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_pixel_tile_1535},{t:this.mc_pixel_tile_1534},{t:this.mc_pixel_tile_1533},{t:this.mc_pixel_tile_1532},{t:this.mc_pixel_tile_1531},{t:this.mc_pixel_tile_1530},{t:this.mc_pixel_tile_1529},{t:this.mc_pixel_tile_1528},{t:this.mc_pixel_tile_1527},{t:this.mc_pixel_tile_1526},{t:this.mc_pixel_tile_1525},{t:this.mc_pixel_tile_1524},{t:this.mc_pixel_tile_1523},{t:this.mc_pixel_tile_1522},{t:this.mc_pixel_tile_1521},{t:this.mc_pixel_tile_1520},{t:this.mc_pixel_tile_1519},{t:this.mc_pixel_tile_1518},{t:this.mc_pixel_tile_1517},{t:this.mc_pixel_tile_1516},{t:this.mc_pixel_tile_1515},{t:this.mc_pixel_tile_1514},{t:this.mc_pixel_tile_1513},{t:this.mc_pixel_tile_1512},{t:this.mc_pixel_tile_1511},{t:this.mc_pixel_tile_1510},{t:this.mc_pixel_tile_1509},{t:this.mc_pixel_tile_1508},{t:this.mc_pixel_tile_1507},{t:this.mc_pixel_tile_1506},{t:this.mc_pixel_tile_1505},{t:this.mc_pixel_tile_1504},{t:this.mc_pixel_tile_1503},{t:this.mc_pixel_tile_1502},{t:this.mc_pixel_tile_1501},{t:this.mc_pixel_tile_1500},{t:this.mc_pixel_tile_1499},{t:this.mc_pixel_tile_1498},{t:this.mc_pixel_tile_1497},{t:this.mc_pixel_tile_1496},{t:this.mc_pixel_tile_1495},{t:this.mc_pixel_tile_1494},{t:this.mc_pixel_tile_1493},{t:this.mc_pixel_tile_1492},{t:this.mc_pixel_tile_1491},{t:this.mc_pixel_tile_1490},{t:this.mc_pixel_tile_1489},{t:this.mc_pixel_tile_1488},{t:this.mc_pixel_tile_1487},{t:this.mc_pixel_tile_1486},{t:this.mc_pixel_tile_1485},{t:this.mc_pixel_tile_1484},{t:this.mc_pixel_tile_1483},{t:this.mc_pixel_tile_1482},{t:this.mc_pixel_tile_1481},{t:this.mc_pixel_tile_1480},{t:this.mc_pixel_tile_1479},{t:this.mc_pixel_tile_1478},{t:this.mc_pixel_tile_1477},{t:this.mc_pixel_tile_1476},{t:this.mc_pixel_tile_1475},{t:this.mc_pixel_tile_1474},{t:this.mc_pixel_tile_1473},{t:this.mc_pixel_tile_1472},{t:this.mc_pixel_tile_1471},{t:this.mc_pixel_tile_1470},{t:this.mc_pixel_tile_1469},{t:this.mc_pixel_tile_1468},{t:this.mc_pixel_tile_1467},{t:this.mc_pixel_tile_1466},{t:this.mc_pixel_tile_1465},{t:this.mc_pixel_tile_1464},{t:this.mc_pixel_tile_1463},{t:this.mc_pixel_tile_1462},{t:this.mc_pixel_tile_1461},{t:this.mc_pixel_tile_1460},{t:this.mc_pixel_tile_1459},{t:this.mc_pixel_tile_1458},{t:this.mc_pixel_tile_1457},{t:this.mc_pixel_tile_1456},{t:this.mc_pixel_tile_1455},{t:this.mc_pixel_tile_1454},{t:this.mc_pixel_tile_1453},{t:this.mc_pixel_tile_1452},{t:this.mc_pixel_tile_1451},{t:this.mc_pixel_tile_1450},{t:this.mc_pixel_tile_1449},{t:this.mc_pixel_tile_1448},{t:this.mc_pixel_tile_1447},{t:this.mc_pixel_tile_1446},{t:this.mc_pixel_tile_1445},{t:this.mc_pixel_tile_1444},{t:this.mc_pixel_tile_1443},{t:this.mc_pixel_tile_1442},{t:this.mc_pixel_tile_1441},{t:this.mc_pixel_tile_1440},{t:this.mc_pixel_tile_1439},{t:this.mc_pixel_tile_1438},{t:this.mc_pixel_tile_1437},{t:this.mc_pixel_tile_1436},{t:this.mc_pixel_tile_1435},{t:this.mc_pixel_tile_1434},{t:this.mc_pixel_tile_1433},{t:this.mc_pixel_tile_1432},{t:this.mc_pixel_tile_1431},{t:this.mc_pixel_tile_1430},{t:this.mc_pixel_tile_1429},{t:this.mc_pixel_tile_1428},{t:this.mc_pixel_tile_1427},{t:this.mc_pixel_tile_1426},{t:this.mc_pixel_tile_1425},{t:this.mc_pixel_tile_1424},{t:this.mc_pixel_tile_1423},{t:this.mc_pixel_tile_1422},{t:this.mc_pixel_tile_1421},{t:this.mc_pixel_tile_1420},{t:this.mc_pixel_tile_1419},{t:this.mc_pixel_tile_1418},{t:this.mc_pixel_tile_1417},{t:this.mc_pixel_tile_1416},{t:this.mc_pixel_tile_1415},{t:this.mc_pixel_tile_1414},{t:this.mc_pixel_tile_1413},{t:this.mc_pixel_tile_1412},{t:this.mc_pixel_tile_1411},{t:this.mc_pixel_tile_1410},{t:this.mc_pixel_tile_1409},{t:this.mc_pixel_tile_1408},{t:this.mc_pixel_tile_1407},{t:this.mc_pixel_tile_1406},{t:this.mc_pixel_tile_1405},{t:this.mc_pixel_tile_1404},{t:this.mc_pixel_tile_1403},{t:this.mc_pixel_tile_1402},{t:this.mc_pixel_tile_1401},{t:this.mc_pixel_tile_1400},{t:this.mc_pixel_tile_1399},{t:this.mc_pixel_tile_1398},{t:this.mc_pixel_tile_1397},{t:this.mc_pixel_tile_1396},{t:this.mc_pixel_tile_1395},{t:this.mc_pixel_tile_1394},{t:this.mc_pixel_tile_1393},{t:this.mc_pixel_tile_1392},{t:this.mc_pixel_tile_1391},{t:this.mc_pixel_tile_1390},{t:this.mc_pixel_tile_1389},{t:this.mc_pixel_tile_1388},{t:this.mc_pixel_tile_1387},{t:this.mc_pixel_tile_1386},{t:this.mc_pixel_tile_1385},{t:this.mc_pixel_tile_1384},{t:this.mc_pixel_tile_1383},{t:this.mc_pixel_tile_1382},{t:this.mc_pixel_tile_1381},{t:this.mc_pixel_tile_1380},{t:this.mc_pixel_tile_1379},{t:this.mc_pixel_tile_1378},{t:this.mc_pixel_tile_1377},{t:this.mc_pixel_tile_1376},{t:this.mc_pixel_tile_1375},{t:this.mc_pixel_tile_1374},{t:this.mc_pixel_tile_1373},{t:this.mc_pixel_tile_1372},{t:this.mc_pixel_tile_1371},{t:this.mc_pixel_tile_1370},{t:this.mc_pixel_tile_1369},{t:this.mc_pixel_tile_1368},{t:this.mc_pixel_tile_1367},{t:this.mc_pixel_tile_1366},{t:this.mc_pixel_tile_1365},{t:this.mc_pixel_tile_1364},{t:this.mc_pixel_tile_1363},{t:this.mc_pixel_tile_1362},{t:this.mc_pixel_tile_1361},{t:this.mc_pixel_tile_1360},{t:this.mc_pixel_tile_1359},{t:this.mc_pixel_tile_1358},{t:this.mc_pixel_tile_1357},{t:this.mc_pixel_tile_1356},{t:this.mc_pixel_tile_1355},{t:this.mc_pixel_tile_1354},{t:this.mc_pixel_tile_1353},{t:this.mc_pixel_tile_1352},{t:this.mc_pixel_tile_1351},{t:this.mc_pixel_tile_1350},{t:this.mc_pixel_tile_1349},{t:this.mc_pixel_tile_1348},{t:this.mc_pixel_tile_1347},{t:this.mc_pixel_tile_1346},{t:this.mc_pixel_tile_1345},{t:this.mc_pixel_tile_1344},{t:this.mc_pixel_tile_1343},{t:this.mc_pixel_tile_1342},{t:this.mc_pixel_tile_1341},{t:this.mc_pixel_tile_1340},{t:this.mc_pixel_tile_1339},{t:this.mc_pixel_tile_1338},{t:this.mc_pixel_tile_1337},{t:this.mc_pixel_tile_1336},{t:this.mc_pixel_tile_1335},{t:this.mc_pixel_tile_1334},{t:this.mc_pixel_tile_1333},{t:this.mc_pixel_tile_1332},{t:this.mc_pixel_tile_1331},{t:this.mc_pixel_tile_1330},{t:this.mc_pixel_tile_1329},{t:this.mc_pixel_tile_1328},{t:this.mc_pixel_tile_1327},{t:this.mc_pixel_tile_1326},{t:this.mc_pixel_tile_1325},{t:this.mc_pixel_tile_1324},{t:this.mc_pixel_tile_1323},{t:this.mc_pixel_tile_1322},{t:this.mc_pixel_tile_1321},{t:this.mc_pixel_tile_1320},{t:this.mc_pixel_tile_1319},{t:this.mc_pixel_tile_1318},{t:this.mc_pixel_tile_1317},{t:this.mc_pixel_tile_1316},{t:this.mc_pixel_tile_1315},{t:this.mc_pixel_tile_1314},{t:this.mc_pixel_tile_1313},{t:this.mc_pixel_tile_1312},{t:this.mc_pixel_tile_1311},{t:this.mc_pixel_tile_1310},{t:this.mc_pixel_tile_1309},{t:this.mc_pixel_tile_1308},{t:this.mc_pixel_tile_1307},{t:this.mc_pixel_tile_1306},{t:this.mc_pixel_tile_1305},{t:this.mc_pixel_tile_1304},{t:this.mc_pixel_tile_1303},{t:this.mc_pixel_tile_1302},{t:this.mc_pixel_tile_1301},{t:this.mc_pixel_tile_1300},{t:this.mc_pixel_tile_1299},{t:this.mc_pixel_tile_1298},{t:this.mc_pixel_tile_1297},{t:this.mc_pixel_tile_1296},{t:this.mc_pixel_tile_1295},{t:this.mc_pixel_tile_1294},{t:this.mc_pixel_tile_1293},{t:this.mc_pixel_tile_1292},{t:this.mc_pixel_tile_1291},{t:this.mc_pixel_tile_1290},{t:this.mc_pixel_tile_1289},{t:this.mc_pixel_tile_1288},{t:this.mc_pixel_tile_1287},{t:this.mc_pixel_tile_1286},{t:this.mc_pixel_tile_1285},{t:this.mc_pixel_tile_1284},{t:this.mc_pixel_tile_1283},{t:this.mc_pixel_tile_1282},{t:this.mc_pixel_tile_1281},{t:this.mc_pixel_tile_1280},{t:this.mc_pixel_tile_1279},{t:this.mc_pixel_tile_1278},{t:this.mc_pixel_tile_1277},{t:this.mc_pixel_tile_1276},{t:this.mc_pixel_tile_1275},{t:this.mc_pixel_tile_1274},{t:this.mc_pixel_tile_1273},{t:this.mc_pixel_tile_1272},{t:this.mc_pixel_tile_1271},{t:this.mc_pixel_tile_1270},{t:this.mc_pixel_tile_1269},{t:this.mc_pixel_tile_1268},{t:this.mc_pixel_tile_1267},{t:this.mc_pixel_tile_1266},{t:this.mc_pixel_tile_1265},{t:this.mc_pixel_tile_1264},{t:this.mc_pixel_tile_1263},{t:this.mc_pixel_tile_1262},{t:this.mc_pixel_tile_1261},{t:this.mc_pixel_tile_1260},{t:this.mc_pixel_tile_1259},{t:this.mc_pixel_tile_1258},{t:this.mc_pixel_tile_1257},{t:this.mc_pixel_tile_1256},{t:this.mc_pixel_tile_1255},{t:this.mc_pixel_tile_1254},{t:this.mc_pixel_tile_1253},{t:this.mc_pixel_tile_1252},{t:this.mc_pixel_tile_1251},{t:this.mc_pixel_tile_1250},{t:this.mc_pixel_tile_1249},{t:this.mc_pixel_tile_1248},{t:this.mc_pixel_tile_1247},{t:this.mc_pixel_tile_1246},{t:this.mc_pixel_tile_1245},{t:this.mc_pixel_tile_1244},{t:this.mc_pixel_tile_1243},{t:this.mc_pixel_tile_1242},{t:this.mc_pixel_tile_1241},{t:this.mc_pixel_tile_1240},{t:this.mc_pixel_tile_1239},{t:this.mc_pixel_tile_1238},{t:this.mc_pixel_tile_1237},{t:this.mc_pixel_tile_1236},{t:this.mc_pixel_tile_1235},{t:this.mc_pixel_tile_1234},{t:this.mc_pixel_tile_1233},{t:this.mc_pixel_tile_1232},{t:this.mc_pixel_tile_1231},{t:this.mc_pixel_tile_1230},{t:this.mc_pixel_tile_1229},{t:this.mc_pixel_tile_1228},{t:this.mc_pixel_tile_1227},{t:this.mc_pixel_tile_1226},{t:this.mc_pixel_tile_1225},{t:this.mc_pixel_tile_1224},{t:this.mc_pixel_tile_1223},{t:this.mc_pixel_tile_1222},{t:this.mc_pixel_tile_1221},{t:this.mc_pixel_tile_1220},{t:this.mc_pixel_tile_1219},{t:this.mc_pixel_tile_1218},{t:this.mc_pixel_tile_1217},{t:this.mc_pixel_tile_1216},{t:this.mc_pixel_tile_1215},{t:this.mc_pixel_tile_1214},{t:this.mc_pixel_tile_1213},{t:this.mc_pixel_tile_1212},{t:this.mc_pixel_tile_1211},{t:this.mc_pixel_tile_1210},{t:this.mc_pixel_tile_1209},{t:this.mc_pixel_tile_1208},{t:this.mc_pixel_tile_1207},{t:this.mc_pixel_tile_1206},{t:this.mc_pixel_tile_1205},{t:this.mc_pixel_tile_1204},{t:this.mc_pixel_tile_1203},{t:this.mc_pixel_tile_1202},{t:this.mc_pixel_tile_1201},{t:this.mc_pixel_tile_1200},{t:this.mc_pixel_tile_1199},{t:this.mc_pixel_tile_1198},{t:this.mc_pixel_tile_1197},{t:this.mc_pixel_tile_1196},{t:this.mc_pixel_tile_1195},{t:this.mc_pixel_tile_1194},{t:this.mc_pixel_tile_1193},{t:this.mc_pixel_tile_1192},{t:this.mc_pixel_tile_1191},{t:this.mc_pixel_tile_1190},{t:this.mc_pixel_tile_1189},{t:this.mc_pixel_tile_1188},{t:this.mc_pixel_tile_1187},{t:this.mc_pixel_tile_1186},{t:this.mc_pixel_tile_1185},{t:this.mc_pixel_tile_1184},{t:this.mc_pixel_tile_1183},{t:this.mc_pixel_tile_1182},{t:this.mc_pixel_tile_1181},{t:this.mc_pixel_tile_1180},{t:this.mc_pixel_tile_1179},{t:this.mc_pixel_tile_1178},{t:this.mc_pixel_tile_1177},{t:this.mc_pixel_tile_1176},{t:this.mc_pixel_tile_1175},{t:this.mc_pixel_tile_1174},{t:this.mc_pixel_tile_1173},{t:this.mc_pixel_tile_1172},{t:this.mc_pixel_tile_1171},{t:this.mc_pixel_tile_1170},{t:this.mc_pixel_tile_1169},{t:this.mc_pixel_tile_1168},{t:this.mc_pixel_tile_1167},{t:this.mc_pixel_tile_1166},{t:this.mc_pixel_tile_1165},{t:this.mc_pixel_tile_1164},{t:this.mc_pixel_tile_1163},{t:this.mc_pixel_tile_1162},{t:this.mc_pixel_tile_1161},{t:this.mc_pixel_tile_1160},{t:this.mc_pixel_tile_1159},{t:this.mc_pixel_tile_1158},{t:this.mc_pixel_tile_1157},{t:this.mc_pixel_tile_1156},{t:this.mc_pixel_tile_1155},{t:this.mc_pixel_tile_1154},{t:this.mc_pixel_tile_1153},{t:this.mc_pixel_tile_1152},{t:this.mc_pixel_tile_1151},{t:this.mc_pixel_tile_1150},{t:this.mc_pixel_tile_1149},{t:this.mc_pixel_tile_1148},{t:this.mc_pixel_tile_1147},{t:this.mc_pixel_tile_1146},{t:this.mc_pixel_tile_1145},{t:this.mc_pixel_tile_1144},{t:this.mc_pixel_tile_1143},{t:this.mc_pixel_tile_1142},{t:this.mc_pixel_tile_1141},{t:this.mc_pixel_tile_1140},{t:this.mc_pixel_tile_1139},{t:this.mc_pixel_tile_1138},{t:this.mc_pixel_tile_1137},{t:this.mc_pixel_tile_1136},{t:this.mc_pixel_tile_1135},{t:this.mc_pixel_tile_1134},{t:this.mc_pixel_tile_1133},{t:this.mc_pixel_tile_1132},{t:this.mc_pixel_tile_1131},{t:this.mc_pixel_tile_1130},{t:this.mc_pixel_tile_1129},{t:this.mc_pixel_tile_1128},{t:this.mc_pixel_tile_1127},{t:this.mc_pixel_tile_1126},{t:this.mc_pixel_tile_1125},{t:this.mc_pixel_tile_1124},{t:this.mc_pixel_tile_1123},{t:this.mc_pixel_tile_1122},{t:this.mc_pixel_tile_1121},{t:this.mc_pixel_tile_1120},{t:this.mc_pixel_tile_1119},{t:this.mc_pixel_tile_1118},{t:this.mc_pixel_tile_1117},{t:this.mc_pixel_tile_1116},{t:this.mc_pixel_tile_1115},{t:this.mc_pixel_tile_1114},{t:this.mc_pixel_tile_1113},{t:this.mc_pixel_tile_1112},{t:this.mc_pixel_tile_1111},{t:this.mc_pixel_tile_1110},{t:this.mc_pixel_tile_1109},{t:this.mc_pixel_tile_1108},{t:this.mc_pixel_tile_1107},{t:this.mc_pixel_tile_1106},{t:this.mc_pixel_tile_1105},{t:this.mc_pixel_tile_1104},{t:this.mc_pixel_tile_1103},{t:this.mc_pixel_tile_1102},{t:this.mc_pixel_tile_1101},{t:this.mc_pixel_tile_1100},{t:this.mc_pixel_tile_1099},{t:this.mc_pixel_tile_1098},{t:this.mc_pixel_tile_1097},{t:this.mc_pixel_tile_1096},{t:this.mc_pixel_tile_1095},{t:this.mc_pixel_tile_1094},{t:this.mc_pixel_tile_1093},{t:this.mc_pixel_tile_1092},{t:this.mc_pixel_tile_1091},{t:this.mc_pixel_tile_1090},{t:this.mc_pixel_tile_1089},{t:this.mc_pixel_tile_1088},{t:this.mc_pixel_tile_1087},{t:this.mc_pixel_tile_1086},{t:this.mc_pixel_tile_1085},{t:this.mc_pixel_tile_1084},{t:this.mc_pixel_tile_1083},{t:this.mc_pixel_tile_1082},{t:this.mc_pixel_tile_1081},{t:this.mc_pixel_tile_1080},{t:this.mc_pixel_tile_1079},{t:this.mc_pixel_tile_1078},{t:this.mc_pixel_tile_1077},{t:this.mc_pixel_tile_1076},{t:this.mc_pixel_tile_1075},{t:this.mc_pixel_tile_1074},{t:this.mc_pixel_tile_1073},{t:this.mc_pixel_tile_1072},{t:this.mc_pixel_tile_1071},{t:this.mc_pixel_tile_1070},{t:this.mc_pixel_tile_1069},{t:this.mc_pixel_tile_1068},{t:this.mc_pixel_tile_1067},{t:this.mc_pixel_tile_1066},{t:this.mc_pixel_tile_1065},{t:this.mc_pixel_tile_1064},{t:this.mc_pixel_tile_1063},{t:this.mc_pixel_tile_1062},{t:this.mc_pixel_tile_1061},{t:this.mc_pixel_tile_1060},{t:this.mc_pixel_tile_1059},{t:this.mc_pixel_tile_1058},{t:this.mc_pixel_tile_1057},{t:this.mc_pixel_tile_1056},{t:this.mc_pixel_tile_1055},{t:this.mc_pixel_tile_1054},{t:this.mc_pixel_tile_1053},{t:this.mc_pixel_tile_1052},{t:this.mc_pixel_tile_1051},{t:this.mc_pixel_tile_1050},{t:this.mc_pixel_tile_1049},{t:this.mc_pixel_tile_1048},{t:this.mc_pixel_tile_1047},{t:this.mc_pixel_tile_1046},{t:this.mc_pixel_tile_1045},{t:this.mc_pixel_tile_1044},{t:this.mc_pixel_tile_1043},{t:this.mc_pixel_tile_1042},{t:this.mc_pixel_tile_1041},{t:this.mc_pixel_tile_1040},{t:this.mc_pixel_tile_1039},{t:this.mc_pixel_tile_1038},{t:this.mc_pixel_tile_1037},{t:this.mc_pixel_tile_1036},{t:this.mc_pixel_tile_1035},{t:this.mc_pixel_tile_1034},{t:this.mc_pixel_tile_1033},{t:this.mc_pixel_tile_1032},{t:this.mc_pixel_tile_1031},{t:this.mc_pixel_tile_1030},{t:this.mc_pixel_tile_1029},{t:this.mc_pixel_tile_1028},{t:this.mc_pixel_tile_1027},{t:this.mc_pixel_tile_1026},{t:this.mc_pixel_tile_1025},{t:this.mc_pixel_tile_1024},{t:this.mc_pixel_tile_1023},{t:this.mc_pixel_tile_1022},{t:this.mc_pixel_tile_1021},{t:this.mc_pixel_tile_1020},{t:this.mc_pixel_tile_1019},{t:this.mc_pixel_tile_1018},{t:this.mc_pixel_tile_1017},{t:this.mc_pixel_tile_1016},{t:this.mc_pixel_tile_1015},{t:this.mc_pixel_tile_1014},{t:this.mc_pixel_tile_1013},{t:this.mc_pixel_tile_1012},{t:this.mc_pixel_tile_1011},{t:this.mc_pixel_tile_1010},{t:this.mc_pixel_tile_1009},{t:this.mc_pixel_tile_1008},{t:this.mc_pixel_tile_1007},{t:this.mc_pixel_tile_1006},{t:this.mc_pixel_tile_1005},{t:this.mc_pixel_tile_1004},{t:this.mc_pixel_tile_1003},{t:this.mc_pixel_tile_1002},{t:this.mc_pixel_tile_1001},{t:this.mc_pixel_tile_1000},{t:this.mc_pixel_tile_999},{t:this.mc_pixel_tile_998},{t:this.mc_pixel_tile_997},{t:this.mc_pixel_tile_996},{t:this.mc_pixel_tile_995},{t:this.mc_pixel_tile_994},{t:this.mc_pixel_tile_993},{t:this.mc_pixel_tile_992},{t:this.mc_pixel_tile_991},{t:this.mc_pixel_tile_990},{t:this.mc_pixel_tile_989},{t:this.mc_pixel_tile_988},{t:this.mc_pixel_tile_987},{t:this.mc_pixel_tile_986},{t:this.mc_pixel_tile_985},{t:this.mc_pixel_tile_984},{t:this.mc_pixel_tile_983},{t:this.mc_pixel_tile_982},{t:this.mc_pixel_tile_981},{t:this.mc_pixel_tile_980},{t:this.mc_pixel_tile_979},{t:this.mc_pixel_tile_978},{t:this.mc_pixel_tile_977},{t:this.mc_pixel_tile_976},{t:this.mc_pixel_tile_975},{t:this.mc_pixel_tile_974},{t:this.mc_pixel_tile_973},{t:this.mc_pixel_tile_972},{t:this.mc_pixel_tile_971},{t:this.mc_pixel_tile_970},{t:this.mc_pixel_tile_969},{t:this.mc_pixel_tile_968},{t:this.mc_pixel_tile_967},{t:this.mc_pixel_tile_966},{t:this.mc_pixel_tile_965},{t:this.mc_pixel_tile_964},{t:this.mc_pixel_tile_963},{t:this.mc_pixel_tile_962},{t:this.mc_pixel_tile_961},{t:this.mc_pixel_tile_960},{t:this.mc_pixel_tile_959},{t:this.mc_pixel_tile_958},{t:this.mc_pixel_tile_957},{t:this.mc_pixel_tile_956},{t:this.mc_pixel_tile_955},{t:this.mc_pixel_tile_954},{t:this.mc_pixel_tile_953},{t:this.mc_pixel_tile_952},{t:this.mc_pixel_tile_951},{t:this.mc_pixel_tile_950},{t:this.mc_pixel_tile_949},{t:this.mc_pixel_tile_948},{t:this.mc_pixel_tile_947},{t:this.mc_pixel_tile_946},{t:this.mc_pixel_tile_945},{t:this.mc_pixel_tile_944},{t:this.mc_pixel_tile_943},{t:this.mc_pixel_tile_942},{t:this.mc_pixel_tile_941},{t:this.mc_pixel_tile_940},{t:this.mc_pixel_tile_939},{t:this.mc_pixel_tile_938},{t:this.mc_pixel_tile_937},{t:this.mc_pixel_tile_936},{t:this.mc_pixel_tile_935},{t:this.mc_pixel_tile_934},{t:this.mc_pixel_tile_933},{t:this.mc_pixel_tile_932},{t:this.mc_pixel_tile_931},{t:this.mc_pixel_tile_930},{t:this.mc_pixel_tile_929},{t:this.mc_pixel_tile_928},{t:this.mc_pixel_tile_927},{t:this.mc_pixel_tile_926},{t:this.mc_pixel_tile_925},{t:this.mc_pixel_tile_924},{t:this.mc_pixel_tile_923},{t:this.mc_pixel_tile_922},{t:this.mc_pixel_tile_921},{t:this.mc_pixel_tile_920},{t:this.mc_pixel_tile_919},{t:this.mc_pixel_tile_918},{t:this.mc_pixel_tile_917},{t:this.mc_pixel_tile_916},{t:this.mc_pixel_tile_915},{t:this.mc_pixel_tile_914},{t:this.mc_pixel_tile_913},{t:this.mc_pixel_tile_912},{t:this.mc_pixel_tile_911},{t:this.mc_pixel_tile_910},{t:this.mc_pixel_tile_909},{t:this.mc_pixel_tile_908},{t:this.mc_pixel_tile_907},{t:this.mc_pixel_tile_906},{t:this.mc_pixel_tile_905},{t:this.mc_pixel_tile_904},{t:this.mc_pixel_tile_903},{t:this.mc_pixel_tile_902},{t:this.mc_pixel_tile_901},{t:this.mc_pixel_tile_900},{t:this.mc_pixel_tile_899},{t:this.mc_pixel_tile_898},{t:this.mc_pixel_tile_897},{t:this.mc_pixel_tile_896},{t:this.mc_pixel_tile_895},{t:this.mc_pixel_tile_894},{t:this.mc_pixel_tile_893},{t:this.mc_pixel_tile_892},{t:this.mc_pixel_tile_891},{t:this.mc_pixel_tile_890},{t:this.mc_pixel_tile_889},{t:this.mc_pixel_tile_888},{t:this.mc_pixel_tile_887},{t:this.mc_pixel_tile_886},{t:this.mc_pixel_tile_885},{t:this.mc_pixel_tile_884},{t:this.mc_pixel_tile_883},{t:this.mc_pixel_tile_882},{t:this.mc_pixel_tile_881},{t:this.mc_pixel_tile_880},{t:this.mc_pixel_tile_879},{t:this.mc_pixel_tile_878},{t:this.mc_pixel_tile_877},{t:this.mc_pixel_tile_876},{t:this.mc_pixel_tile_875},{t:this.mc_pixel_tile_874},{t:this.mc_pixel_tile_873},{t:this.mc_pixel_tile_872},{t:this.mc_pixel_tile_871},{t:this.mc_pixel_tile_870},{t:this.mc_pixel_tile_869},{t:this.mc_pixel_tile_868},{t:this.mc_pixel_tile_867},{t:this.mc_pixel_tile_866},{t:this.mc_pixel_tile_865},{t:this.mc_pixel_tile_864},{t:this.mc_pixel_tile_863},{t:this.mc_pixel_tile_862},{t:this.mc_pixel_tile_861},{t:this.mc_pixel_tile_860},{t:this.mc_pixel_tile_859},{t:this.mc_pixel_tile_858},{t:this.mc_pixel_tile_857},{t:this.mc_pixel_tile_856},{t:this.mc_pixel_tile_855},{t:this.mc_pixel_tile_854},{t:this.mc_pixel_tile_853},{t:this.mc_pixel_tile_852},{t:this.mc_pixel_tile_851},{t:this.mc_pixel_tile_850},{t:this.mc_pixel_tile_849},{t:this.mc_pixel_tile_848},{t:this.mc_pixel_tile_847},{t:this.mc_pixel_tile_846},{t:this.mc_pixel_tile_845},{t:this.mc_pixel_tile_844},{t:this.mc_pixel_tile_843},{t:this.mc_pixel_tile_842},{t:this.mc_pixel_tile_841},{t:this.mc_pixel_tile_840},{t:this.mc_pixel_tile_839},{t:this.mc_pixel_tile_838},{t:this.mc_pixel_tile_837},{t:this.mc_pixel_tile_836},{t:this.mc_pixel_tile_835},{t:this.mc_pixel_tile_834},{t:this.mc_pixel_tile_833},{t:this.mc_pixel_tile_832},{t:this.mc_pixel_tile_831},{t:this.mc_pixel_tile_830},{t:this.mc_pixel_tile_829},{t:this.mc_pixel_tile_828},{t:this.mc_pixel_tile_827},{t:this.mc_pixel_tile_826},{t:this.mc_pixel_tile_825},{t:this.mc_pixel_tile_824},{t:this.mc_pixel_tile_823},{t:this.mc_pixel_tile_822},{t:this.mc_pixel_tile_821},{t:this.mc_pixel_tile_820},{t:this.mc_pixel_tile_819},{t:this.mc_pixel_tile_818},{t:this.mc_pixel_tile_817},{t:this.mc_pixel_tile_816},{t:this.mc_pixel_tile_815},{t:this.mc_pixel_tile_814},{t:this.mc_pixel_tile_813},{t:this.mc_pixel_tile_812},{t:this.mc_pixel_tile_811},{t:this.mc_pixel_tile_810},{t:this.mc_pixel_tile_809},{t:this.mc_pixel_tile_808},{t:this.mc_pixel_tile_807},{t:this.mc_pixel_tile_806},{t:this.mc_pixel_tile_805},{t:this.mc_pixel_tile_804},{t:this.mc_pixel_tile_803},{t:this.mc_pixel_tile_802},{t:this.mc_pixel_tile_801},{t:this.mc_pixel_tile_800},{t:this.mc_pixel_tile_799},{t:this.mc_pixel_tile_798},{t:this.mc_pixel_tile_797},{t:this.mc_pixel_tile_796},{t:this.mc_pixel_tile_795},{t:this.mc_pixel_tile_794},{t:this.mc_pixel_tile_793},{t:this.mc_pixel_tile_792},{t:this.mc_pixel_tile_791},{t:this.mc_pixel_tile_790},{t:this.mc_pixel_tile_789},{t:this.mc_pixel_tile_788},{t:this.mc_pixel_tile_787},{t:this.mc_pixel_tile_786},{t:this.mc_pixel_tile_785},{t:this.mc_pixel_tile_784},{t:this.mc_pixel_tile_783},{t:this.mc_pixel_tile_782},{t:this.mc_pixel_tile_781},{t:this.mc_pixel_tile_780},{t:this.mc_pixel_tile_779},{t:this.mc_pixel_tile_778},{t:this.mc_pixel_tile_777},{t:this.mc_pixel_tile_776},{t:this.mc_pixel_tile_775},{t:this.mc_pixel_tile_774},{t:this.mc_pixel_tile_773},{t:this.mc_pixel_tile_772},{t:this.mc_pixel_tile_771},{t:this.mc_pixel_tile_770},{t:this.mc_pixel_tile_769},{t:this.mc_pixel_tile_768},{t:this.mc_pixel_tile_767},{t:this.mc_pixel_tile_766},{t:this.mc_pixel_tile_765},{t:this.mc_pixel_tile_764},{t:this.mc_pixel_tile_763},{t:this.mc_pixel_tile_762},{t:this.mc_pixel_tile_761},{t:this.mc_pixel_tile_760},{t:this.mc_pixel_tile_759},{t:this.mc_pixel_tile_758},{t:this.mc_pixel_tile_757},{t:this.mc_pixel_tile_756},{t:this.mc_pixel_tile_755},{t:this.mc_pixel_tile_754},{t:this.mc_pixel_tile_753},{t:this.mc_pixel_tile_752},{t:this.mc_pixel_tile_751},{t:this.mc_pixel_tile_750},{t:this.mc_pixel_tile_749},{t:this.mc_pixel_tile_748},{t:this.mc_pixel_tile_747},{t:this.mc_pixel_tile_746},{t:this.mc_pixel_tile_745},{t:this.mc_pixel_tile_744},{t:this.mc_pixel_tile_743},{t:this.mc_pixel_tile_742},{t:this.mc_pixel_tile_741},{t:this.mc_pixel_tile_740},{t:this.mc_pixel_tile_739},{t:this.mc_pixel_tile_738},{t:this.mc_pixel_tile_737},{t:this.mc_pixel_tile_736},{t:this.mc_pixel_tile_735},{t:this.mc_pixel_tile_734},{t:this.mc_pixel_tile_733},{t:this.mc_pixel_tile_732},{t:this.mc_pixel_tile_731},{t:this.mc_pixel_tile_730},{t:this.mc_pixel_tile_729},{t:this.mc_pixel_tile_728},{t:this.mc_pixel_tile_727},{t:this.mc_pixel_tile_726},{t:this.mc_pixel_tile_725},{t:this.mc_pixel_tile_724},{t:this.mc_pixel_tile_723},{t:this.mc_pixel_tile_722},{t:this.mc_pixel_tile_721},{t:this.mc_pixel_tile_720},{t:this.mc_pixel_tile_719},{t:this.mc_pixel_tile_718},{t:this.mc_pixel_tile_717},{t:this.mc_pixel_tile_716},{t:this.mc_pixel_tile_715},{t:this.mc_pixel_tile_714},{t:this.mc_pixel_tile_713},{t:this.mc_pixel_tile_712},{t:this.mc_pixel_tile_711},{t:this.mc_pixel_tile_710},{t:this.mc_pixel_tile_709},{t:this.mc_pixel_tile_708},{t:this.mc_pixel_tile_707},{t:this.mc_pixel_tile_706},{t:this.mc_pixel_tile_705},{t:this.mc_pixel_tile_704},{t:this.mc_pixel_tile_703},{t:this.mc_pixel_tile_702},{t:this.mc_pixel_tile_701},{t:this.mc_pixel_tile_700},{t:this.mc_pixel_tile_699},{t:this.mc_pixel_tile_698},{t:this.mc_pixel_tile_697},{t:this.mc_pixel_tile_696},{t:this.mc_pixel_tile_695},{t:this.mc_pixel_tile_694},{t:this.mc_pixel_tile_693},{t:this.mc_pixel_tile_692},{t:this.mc_pixel_tile_691},{t:this.mc_pixel_tile_690},{t:this.mc_pixel_tile_689},{t:this.mc_pixel_tile_688},{t:this.mc_pixel_tile_687},{t:this.mc_pixel_tile_686},{t:this.mc_pixel_tile_685},{t:this.mc_pixel_tile_684},{t:this.mc_pixel_tile_683},{t:this.mc_pixel_tile_682},{t:this.mc_pixel_tile_681},{t:this.mc_pixel_tile_680},{t:this.mc_pixel_tile_679},{t:this.mc_pixel_tile_678},{t:this.mc_pixel_tile_677},{t:this.mc_pixel_tile_676},{t:this.mc_pixel_tile_675},{t:this.mc_pixel_tile_674},{t:this.mc_pixel_tile_673},{t:this.mc_pixel_tile_672},{t:this.mc_pixel_tile_671},{t:this.mc_pixel_tile_670},{t:this.mc_pixel_tile_669},{t:this.mc_pixel_tile_668},{t:this.mc_pixel_tile_667},{t:this.mc_pixel_tile_666},{t:this.mc_pixel_tile_665},{t:this.mc_pixel_tile_664},{t:this.mc_pixel_tile_663},{t:this.mc_pixel_tile_662},{t:this.mc_pixel_tile_661},{t:this.mc_pixel_tile_660},{t:this.mc_pixel_tile_659},{t:this.mc_pixel_tile_658},{t:this.mc_pixel_tile_657},{t:this.mc_pixel_tile_656},{t:this.mc_pixel_tile_655},{t:this.mc_pixel_tile_654},{t:this.mc_pixel_tile_653},{t:this.mc_pixel_tile_652},{t:this.mc_pixel_tile_651},{t:this.mc_pixel_tile_650},{t:this.mc_pixel_tile_649},{t:this.mc_pixel_tile_648},{t:this.mc_pixel_tile_647},{t:this.mc_pixel_tile_646},{t:this.mc_pixel_tile_645},{t:this.mc_pixel_tile_644},{t:this.mc_pixel_tile_643},{t:this.mc_pixel_tile_642},{t:this.mc_pixel_tile_641},{t:this.mc_pixel_tile_640},{t:this.mc_pixel_tile_639},{t:this.mc_pixel_tile_638},{t:this.mc_pixel_tile_637},{t:this.mc_pixel_tile_636},{t:this.mc_pixel_tile_635},{t:this.mc_pixel_tile_634},{t:this.mc_pixel_tile_633},{t:this.mc_pixel_tile_632},{t:this.mc_pixel_tile_631},{t:this.mc_pixel_tile_630},{t:this.mc_pixel_tile_629},{t:this.mc_pixel_tile_628},{t:this.mc_pixel_tile_627},{t:this.mc_pixel_tile_626},{t:this.mc_pixel_tile_625},{t:this.mc_pixel_tile_624},{t:this.mc_pixel_tile_623},{t:this.mc_pixel_tile_622},{t:this.mc_pixel_tile_621},{t:this.mc_pixel_tile_620},{t:this.mc_pixel_tile_619},{t:this.mc_pixel_tile_618},{t:this.mc_pixel_tile_617},{t:this.mc_pixel_tile_616},{t:this.mc_pixel_tile_615},{t:this.mc_pixel_tile_614},{t:this.mc_pixel_tile_613},{t:this.mc_pixel_tile_612},{t:this.mc_pixel_tile_611},{t:this.mc_pixel_tile_610},{t:this.mc_pixel_tile_609},{t:this.mc_pixel_tile_608},{t:this.mc_pixel_tile_607},{t:this.mc_pixel_tile_606},{t:this.mc_pixel_tile_605},{t:this.mc_pixel_tile_604},{t:this.mc_pixel_tile_603},{t:this.mc_pixel_tile_602},{t:this.mc_pixel_tile_601},{t:this.mc_pixel_tile_600},{t:this.mc_pixel_tile_599},{t:this.mc_pixel_tile_598},{t:this.mc_pixel_tile_597},{t:this.mc_pixel_tile_596},{t:this.mc_pixel_tile_595},{t:this.mc_pixel_tile_594},{t:this.mc_pixel_tile_593},{t:this.mc_pixel_tile_592},{t:this.mc_pixel_tile_591},{t:this.mc_pixel_tile_590},{t:this.mc_pixel_tile_589},{t:this.mc_pixel_tile_588},{t:this.mc_pixel_tile_587},{t:this.mc_pixel_tile_586},{t:this.mc_pixel_tile_585},{t:this.mc_pixel_tile_584},{t:this.mc_pixel_tile_583},{t:this.mc_pixel_tile_582},{t:this.mc_pixel_tile_581},{t:this.mc_pixel_tile_580},{t:this.mc_pixel_tile_579},{t:this.mc_pixel_tile_578},{t:this.mc_pixel_tile_577},{t:this.mc_pixel_tile_576},{t:this.mc_pixel_tile_575},{t:this.mc_pixel_tile_574},{t:this.mc_pixel_tile_573},{t:this.mc_pixel_tile_572},{t:this.mc_pixel_tile_571},{t:this.mc_pixel_tile_570},{t:this.mc_pixel_tile_569},{t:this.mc_pixel_tile_568},{t:this.mc_pixel_tile_567},{t:this.mc_pixel_tile_566},{t:this.mc_pixel_tile_565},{t:this.mc_pixel_tile_564},{t:this.mc_pixel_tile_563},{t:this.mc_pixel_tile_562},{t:this.mc_pixel_tile_561},{t:this.mc_pixel_tile_560},{t:this.mc_pixel_tile_559},{t:this.mc_pixel_tile_558},{t:this.mc_pixel_tile_557},{t:this.mc_pixel_tile_556},{t:this.mc_pixel_tile_555},{t:this.mc_pixel_tile_554},{t:this.mc_pixel_tile_553},{t:this.mc_pixel_tile_552},{t:this.mc_pixel_tile_551},{t:this.mc_pixel_tile_550},{t:this.mc_pixel_tile_549},{t:this.mc_pixel_tile_548},{t:this.mc_pixel_tile_547},{t:this.mc_pixel_tile_546},{t:this.mc_pixel_tile_545},{t:this.mc_pixel_tile_544},{t:this.mc_pixel_tile_543},{t:this.mc_pixel_tile_542},{t:this.mc_pixel_tile_541},{t:this.mc_pixel_tile_540},{t:this.mc_pixel_tile_539},{t:this.mc_pixel_tile_538},{t:this.mc_pixel_tile_537},{t:this.mc_pixel_tile_536},{t:this.mc_pixel_tile_535},{t:this.mc_pixel_tile_534},{t:this.mc_pixel_tile_533},{t:this.mc_pixel_tile_532},{t:this.mc_pixel_tile_531},{t:this.mc_pixel_tile_530},{t:this.mc_pixel_tile_529},{t:this.mc_pixel_tile_528},{t:this.mc_pixel_tile_527},{t:this.mc_pixel_tile_526},{t:this.mc_pixel_tile_525},{t:this.mc_pixel_tile_524},{t:this.mc_pixel_tile_523},{t:this.mc_pixel_tile_522},{t:this.mc_pixel_tile_521},{t:this.mc_pixel_tile_520},{t:this.mc_pixel_tile_519},{t:this.mc_pixel_tile_518},{t:this.mc_pixel_tile_517},{t:this.mc_pixel_tile_516},{t:this.mc_pixel_tile_515},{t:this.mc_pixel_tile_514},{t:this.mc_pixel_tile_513},{t:this.mc_pixel_tile_512},{t:this.mc_pixel_tile_511},{t:this.mc_pixel_tile_510},{t:this.mc_pixel_tile_509},{t:this.mc_pixel_tile_508},{t:this.mc_pixel_tile_507},{t:this.mc_pixel_tile_506},{t:this.mc_pixel_tile_505},{t:this.mc_pixel_tile_504},{t:this.mc_pixel_tile_503},{t:this.mc_pixel_tile_502},{t:this.mc_pixel_tile_501},{t:this.mc_pixel_tile_500},{t:this.mc_pixel_tile_499},{t:this.mc_pixel_tile_498},{t:this.mc_pixel_tile_497},{t:this.mc_pixel_tile_496},{t:this.mc_pixel_tile_495},{t:this.mc_pixel_tile_494},{t:this.mc_pixel_tile_493},{t:this.mc_pixel_tile_492},{t:this.mc_pixel_tile_491},{t:this.mc_pixel_tile_490},{t:this.mc_pixel_tile_489},{t:this.mc_pixel_tile_488},{t:this.mc_pixel_tile_487},{t:this.mc_pixel_tile_486},{t:this.mc_pixel_tile_485},{t:this.mc_pixel_tile_484},{t:this.mc_pixel_tile_483},{t:this.mc_pixel_tile_482},{t:this.mc_pixel_tile_481},{t:this.mc_pixel_tile_480},{t:this.mc_pixel_tile_479},{t:this.mc_pixel_tile_478},{t:this.mc_pixel_tile_477},{t:this.mc_pixel_tile_476},{t:this.mc_pixel_tile_475},{t:this.mc_pixel_tile_474},{t:this.mc_pixel_tile_473},{t:this.mc_pixel_tile_472},{t:this.mc_pixel_tile_471},{t:this.mc_pixel_tile_470},{t:this.mc_pixel_tile_469},{t:this.mc_pixel_tile_468},{t:this.mc_pixel_tile_467},{t:this.mc_pixel_tile_466},{t:this.mc_pixel_tile_465},{t:this.mc_pixel_tile_464},{t:this.mc_pixel_tile_463},{t:this.mc_pixel_tile_462},{t:this.mc_pixel_tile_461},{t:this.mc_pixel_tile_460},{t:this.mc_pixel_tile_459},{t:this.mc_pixel_tile_458},{t:this.mc_pixel_tile_457},{t:this.mc_pixel_tile_456},{t:this.mc_pixel_tile_455},{t:this.mc_pixel_tile_454},{t:this.mc_pixel_tile_453},{t:this.mc_pixel_tile_452},{t:this.mc_pixel_tile_451},{t:this.mc_pixel_tile_450},{t:this.mc_pixel_tile_449},{t:this.mc_pixel_tile_448},{t:this.mc_pixel_tile_447},{t:this.mc_pixel_tile_446},{t:this.mc_pixel_tile_445},{t:this.mc_pixel_tile_444},{t:this.mc_pixel_tile_443},{t:this.mc_pixel_tile_442},{t:this.mc_pixel_tile_441},{t:this.mc_pixel_tile_440},{t:this.mc_pixel_tile_439},{t:this.mc_pixel_tile_438},{t:this.mc_pixel_tile_437},{t:this.mc_pixel_tile_436},{t:this.mc_pixel_tile_435},{t:this.mc_pixel_tile_434},{t:this.mc_pixel_tile_433},{t:this.mc_pixel_tile_432},{t:this.mc_pixel_tile_431},{t:this.mc_pixel_tile_430},{t:this.mc_pixel_tile_429},{t:this.mc_pixel_tile_428},{t:this.mc_pixel_tile_427},{t:this.mc_pixel_tile_426},{t:this.mc_pixel_tile_425},{t:this.mc_pixel_tile_424},{t:this.mc_pixel_tile_423},{t:this.mc_pixel_tile_422},{t:this.mc_pixel_tile_421},{t:this.mc_pixel_tile_420},{t:this.mc_pixel_tile_419},{t:this.mc_pixel_tile_418},{t:this.mc_pixel_tile_417},{t:this.mc_pixel_tile_416},{t:this.mc_pixel_tile_415},{t:this.mc_pixel_tile_414},{t:this.mc_pixel_tile_413},{t:this.mc_pixel_tile_412},{t:this.mc_pixel_tile_411},{t:this.mc_pixel_tile_410},{t:this.mc_pixel_tile_409},{t:this.mc_pixel_tile_408},{t:this.mc_pixel_tile_407},{t:this.mc_pixel_tile_406},{t:this.mc_pixel_tile_405},{t:this.mc_pixel_tile_404},{t:this.mc_pixel_tile_403},{t:this.mc_pixel_tile_402},{t:this.mc_pixel_tile_401},{t:this.mc_pixel_tile_400},{t:this.mc_pixel_tile_399},{t:this.mc_pixel_tile_398},{t:this.mc_pixel_tile_397},{t:this.mc_pixel_tile_396},{t:this.mc_pixel_tile_395},{t:this.mc_pixel_tile_394},{t:this.mc_pixel_tile_393},{t:this.mc_pixel_tile_392},{t:this.mc_pixel_tile_391},{t:this.mc_pixel_tile_390},{t:this.mc_pixel_tile_389},{t:this.mc_pixel_tile_388},{t:this.mc_pixel_tile_387},{t:this.mc_pixel_tile_386},{t:this.mc_pixel_tile_385},{t:this.mc_pixel_tile_384},{t:this.mc_pixel_tile_383},{t:this.mc_pixel_tile_382},{t:this.mc_pixel_tile_381},{t:this.mc_pixel_tile_380},{t:this.mc_pixel_tile_379},{t:this.mc_pixel_tile_378},{t:this.mc_pixel_tile_377},{t:this.mc_pixel_tile_376},{t:this.mc_pixel_tile_375},{t:this.mc_pixel_tile_374},{t:this.mc_pixel_tile_373},{t:this.mc_pixel_tile_372},{t:this.mc_pixel_tile_371},{t:this.mc_pixel_tile_370},{t:this.mc_pixel_tile_369},{t:this.mc_pixel_tile_368},{t:this.mc_pixel_tile_367},{t:this.mc_pixel_tile_366},{t:this.mc_pixel_tile_365},{t:this.mc_pixel_tile_364},{t:this.mc_pixel_tile_363},{t:this.mc_pixel_tile_362},{t:this.mc_pixel_tile_361},{t:this.mc_pixel_tile_360},{t:this.mc_pixel_tile_359},{t:this.mc_pixel_tile_358},{t:this.mc_pixel_tile_357},{t:this.mc_pixel_tile_356},{t:this.mc_pixel_tile_355},{t:this.mc_pixel_tile_354},{t:this.mc_pixel_tile_353},{t:this.mc_pixel_tile_352},{t:this.mc_pixel_tile_351},{t:this.mc_pixel_tile_350},{t:this.mc_pixel_tile_349},{t:this.mc_pixel_tile_348},{t:this.mc_pixel_tile_347},{t:this.mc_pixel_tile_346},{t:this.mc_pixel_tile_345},{t:this.mc_pixel_tile_344},{t:this.mc_pixel_tile_343},{t:this.mc_pixel_tile_342},{t:this.mc_pixel_tile_341},{t:this.mc_pixel_tile_340},{t:this.mc_pixel_tile_339},{t:this.mc_pixel_tile_338},{t:this.mc_pixel_tile_337},{t:this.mc_pixel_tile_336},{t:this.mc_pixel_tile_335},{t:this.mc_pixel_tile_334},{t:this.mc_pixel_tile_333},{t:this.mc_pixel_tile_332},{t:this.mc_pixel_tile_331},{t:this.mc_pixel_tile_330},{t:this.mc_pixel_tile_329},{t:this.mc_pixel_tile_328},{t:this.mc_pixel_tile_327},{t:this.mc_pixel_tile_326},{t:this.mc_pixel_tile_325},{t:this.mc_pixel_tile_324},{t:this.mc_pixel_tile_323},{t:this.mc_pixel_tile_322},{t:this.mc_pixel_tile_321},{t:this.mc_pixel_tile_320},{t:this.mc_pixel_tile_319},{t:this.mc_pixel_tile_318},{t:this.mc_pixel_tile_317},{t:this.mc_pixel_tile_316},{t:this.mc_pixel_tile_315},{t:this.mc_pixel_tile_314},{t:this.mc_pixel_tile_313},{t:this.mc_pixel_tile_312},{t:this.mc_pixel_tile_311},{t:this.mc_pixel_tile_310},{t:this.mc_pixel_tile_309},{t:this.mc_pixel_tile_308},{t:this.mc_pixel_tile_307},{t:this.mc_pixel_tile_306},{t:this.mc_pixel_tile_305},{t:this.mc_pixel_tile_304},{t:this.mc_pixel_tile_303},{t:this.mc_pixel_tile_302},{t:this.mc_pixel_tile_301},{t:this.mc_pixel_tile_300},{t:this.mc_pixel_tile_299},{t:this.mc_pixel_tile_298},{t:this.mc_pixel_tile_297},{t:this.mc_pixel_tile_296},{t:this.mc_pixel_tile_295},{t:this.mc_pixel_tile_294},{t:this.mc_pixel_tile_293},{t:this.mc_pixel_tile_292},{t:this.mc_pixel_tile_291},{t:this.mc_pixel_tile_290},{t:this.mc_pixel_tile_289},{t:this.mc_pixel_tile_288},{t:this.mc_pixel_tile_287},{t:this.mc_pixel_tile_286},{t:this.mc_pixel_tile_285},{t:this.mc_pixel_tile_284},{t:this.mc_pixel_tile_283},{t:this.mc_pixel_tile_282},{t:this.mc_pixel_tile_281},{t:this.mc_pixel_tile_280},{t:this.mc_pixel_tile_279},{t:this.mc_pixel_tile_278},{t:this.mc_pixel_tile_277},{t:this.mc_pixel_tile_276},{t:this.mc_pixel_tile_275},{t:this.mc_pixel_tile_274},{t:this.mc_pixel_tile_273},{t:this.mc_pixel_tile_272},{t:this.mc_pixel_tile_271},{t:this.mc_pixel_tile_270},{t:this.mc_pixel_tile_269},{t:this.mc_pixel_tile_268},{t:this.mc_pixel_tile_267},{t:this.mc_pixel_tile_266},{t:this.mc_pixel_tile_265},{t:this.mc_pixel_tile_264},{t:this.mc_pixel_tile_263},{t:this.mc_pixel_tile_262},{t:this.mc_pixel_tile_261},{t:this.mc_pixel_tile_260},{t:this.mc_pixel_tile_259},{t:this.mc_pixel_tile_258},{t:this.mc_pixel_tile_257},{t:this.mc_pixel_tile_256},{t:this.mc_pixel_tile_255},{t:this.mc_pixel_tile_254},{t:this.mc_pixel_tile_253},{t:this.mc_pixel_tile_252},{t:this.mc_pixel_tile_251},{t:this.mc_pixel_tile_250},{t:this.mc_pixel_tile_249},{t:this.mc_pixel_tile_248},{t:this.mc_pixel_tile_247},{t:this.mc_pixel_tile_246},{t:this.mc_pixel_tile_245},{t:this.mc_pixel_tile_244},{t:this.mc_pixel_tile_243},{t:this.mc_pixel_tile_242},{t:this.mc_pixel_tile_241},{t:this.mc_pixel_tile_240},{t:this.mc_pixel_tile_239},{t:this.mc_pixel_tile_238},{t:this.mc_pixel_tile_237},{t:this.mc_pixel_tile_236},{t:this.mc_pixel_tile_235},{t:this.mc_pixel_tile_234},{t:this.mc_pixel_tile_233},{t:this.mc_pixel_tile_232},{t:this.mc_pixel_tile_231},{t:this.mc_pixel_tile_230},{t:this.mc_pixel_tile_229},{t:this.mc_pixel_tile_228},{t:this.mc_pixel_tile_227},{t:this.mc_pixel_tile_226},{t:this.mc_pixel_tile_225},{t:this.mc_pixel_tile_224},{t:this.mc_pixel_tile_223},{t:this.mc_pixel_tile_222},{t:this.mc_pixel_tile_221},{t:this.mc_pixel_tile_220},{t:this.mc_pixel_tile_219},{t:this.mc_pixel_tile_218},{t:this.mc_pixel_tile_217},{t:this.mc_pixel_tile_216},{t:this.mc_pixel_tile_215},{t:this.mc_pixel_tile_214},{t:this.mc_pixel_tile_213},{t:this.mc_pixel_tile_212},{t:this.mc_pixel_tile_211},{t:this.mc_pixel_tile_210},{t:this.mc_pixel_tile_209},{t:this.mc_pixel_tile_208},{t:this.mc_pixel_tile_207},{t:this.mc_pixel_tile_206},{t:this.mc_pixel_tile_205},{t:this.mc_pixel_tile_204},{t:this.mc_pixel_tile_203},{t:this.mc_pixel_tile_202},{t:this.mc_pixel_tile_201},{t:this.mc_pixel_tile_200},{t:this.mc_pixel_tile_199},{t:this.mc_pixel_tile_198},{t:this.mc_pixel_tile_197},{t:this.mc_pixel_tile_196},{t:this.mc_pixel_tile_195},{t:this.mc_pixel_tile_194},{t:this.mc_pixel_tile_193},{t:this.mc_pixel_tile_192},{t:this.mc_pixel_tile_191},{t:this.mc_pixel_tile_190},{t:this.mc_pixel_tile_189},{t:this.mc_pixel_tile_188},{t:this.mc_pixel_tile_187},{t:this.mc_pixel_tile_186},{t:this.mc_pixel_tile_185},{t:this.mc_pixel_tile_184},{t:this.mc_pixel_tile_183},{t:this.mc_pixel_tile_182},{t:this.mc_pixel_tile_181},{t:this.mc_pixel_tile_180},{t:this.mc_pixel_tile_179},{t:this.mc_pixel_tile_178},{t:this.mc_pixel_tile_177},{t:this.mc_pixel_tile_176},{t:this.mc_pixel_tile_175},{t:this.mc_pixel_tile_174},{t:this.mc_pixel_tile_173},{t:this.mc_pixel_tile_172},{t:this.mc_pixel_tile_171},{t:this.mc_pixel_tile_170},{t:this.mc_pixel_tile_169},{t:this.mc_pixel_tile_168},{t:this.mc_pixel_tile_167},{t:this.mc_pixel_tile_166},{t:this.mc_pixel_tile_165},{t:this.mc_pixel_tile_164},{t:this.mc_pixel_tile_163},{t:this.mc_pixel_tile_162},{t:this.mc_pixel_tile_161},{t:this.mc_pixel_tile_160},{t:this.mc_pixel_tile_159},{t:this.mc_pixel_tile_158},{t:this.mc_pixel_tile_157},{t:this.mc_pixel_tile_156},{t:this.mc_pixel_tile_155},{t:this.mc_pixel_tile_154},{t:this.mc_pixel_tile_153},{t:this.mc_pixel_tile_152},{t:this.mc_pixel_tile_151},{t:this.mc_pixel_tile_150},{t:this.mc_pixel_tile_149},{t:this.mc_pixel_tile_148},{t:this.mc_pixel_tile_147},{t:this.mc_pixel_tile_146},{t:this.mc_pixel_tile_145},{t:this.mc_pixel_tile_144},{t:this.mc_pixel_tile_143},{t:this.mc_pixel_tile_142},{t:this.mc_pixel_tile_141},{t:this.mc_pixel_tile_140},{t:this.mc_pixel_tile_139},{t:this.mc_pixel_tile_138},{t:this.mc_pixel_tile_137},{t:this.mc_pixel_tile_136},{t:this.mc_pixel_tile_135},{t:this.mc_pixel_tile_134},{t:this.mc_pixel_tile_133},{t:this.mc_pixel_tile_132},{t:this.mc_pixel_tile_131},{t:this.mc_pixel_tile_130},{t:this.mc_pixel_tile_129},{t:this.mc_pixel_tile_128},{t:this.mc_pixel_tile_127},{t:this.mc_pixel_tile_126},{t:this.mc_pixel_tile_125},{t:this.mc_pixel_tile_124},{t:this.mc_pixel_tile_123},{t:this.mc_pixel_tile_122},{t:this.mc_pixel_tile_121},{t:this.mc_pixel_tile_120},{t:this.mc_pixel_tile_119},{t:this.mc_pixel_tile_118},{t:this.mc_pixel_tile_117},{t:this.mc_pixel_tile_116},{t:this.mc_pixel_tile_115},{t:this.mc_pixel_tile_114},{t:this.mc_pixel_tile_113},{t:this.mc_pixel_tile_112},{t:this.mc_pixel_tile_111},{t:this.mc_pixel_tile_110},{t:this.mc_pixel_tile_109},{t:this.mc_pixel_tile_108},{t:this.mc_pixel_tile_107},{t:this.mc_pixel_tile_106},{t:this.mc_pixel_tile_105},{t:this.mc_pixel_tile_104},{t:this.mc_pixel_tile_103},{t:this.mc_pixel_tile_102},{t:this.mc_pixel_tile_101},{t:this.mc_pixel_tile_100},{t:this.mc_pixel_tile_99},{t:this.mc_pixel_tile_98},{t:this.mc_pixel_tile_97},{t:this.mc_pixel_tile_96},{t:this.mc_pixel_tile_95},{t:this.mc_pixel_tile_94},{t:this.mc_pixel_tile_93},{t:this.mc_pixel_tile_92},{t:this.mc_pixel_tile_91},{t:this.mc_pixel_tile_90},{t:this.mc_pixel_tile_89},{t:this.mc_pixel_tile_88},{t:this.mc_pixel_tile_87},{t:this.mc_pixel_tile_86},{t:this.mc_pixel_tile_85},{t:this.mc_pixel_tile_84},{t:this.mc_pixel_tile_83},{t:this.mc_pixel_tile_82},{t:this.mc_pixel_tile_81},{t:this.mc_pixel_tile_80},{t:this.mc_pixel_tile_79},{t:this.mc_pixel_tile_78},{t:this.mc_pixel_tile_77},{t:this.mc_pixel_tile_76},{t:this.mc_pixel_tile_75},{t:this.mc_pixel_tile_74},{t:this.mc_pixel_tile_73},{t:this.mc_pixel_tile_72},{t:this.mc_pixel_tile_71},{t:this.mc_pixel_tile_70},{t:this.mc_pixel_tile_69},{t:this.mc_pixel_tile_68},{t:this.mc_pixel_tile_67},{t:this.mc_pixel_tile_66},{t:this.mc_pixel_tile_65},{t:this.mc_pixel_tile_64},{t:this.mc_pixel_tile_63},{t:this.mc_pixel_tile_62},{t:this.mc_pixel_tile_61},{t:this.mc_pixel_tile_60},{t:this.mc_pixel_tile_59},{t:this.mc_pixel_tile_58},{t:this.mc_pixel_tile_57},{t:this.mc_pixel_tile_56},{t:this.mc_pixel_tile_55},{t:this.mc_pixel_tile_54},{t:this.mc_pixel_tile_53},{t:this.mc_pixel_tile_52},{t:this.mc_pixel_tile_51},{t:this.mc_pixel_tile_50},{t:this.mc_pixel_tile_49},{t:this.mc_pixel_tile_48},{t:this.mc_pixel_tile_47},{t:this.mc_pixel_tile_46},{t:this.mc_pixel_tile_45},{t:this.mc_pixel_tile_44},{t:this.mc_pixel_tile_43},{t:this.mc_pixel_tile_42},{t:this.mc_pixel_tile_41},{t:this.mc_pixel_tile_40},{t:this.mc_pixel_tile_39},{t:this.mc_pixel_tile_38},{t:this.mc_pixel_tile_37},{t:this.mc_pixel_tile_36},{t:this.mc_pixel_tile_35},{t:this.mc_pixel_tile_34},{t:this.mc_pixel_tile_33},{t:this.mc_pixel_tile_32},{t:this.mc_pixel_tile_31},{t:this.mc_pixel_tile_30},{t:this.mc_pixel_tile_29},{t:this.mc_pixel_tile_28},{t:this.mc_pixel_tile_27},{t:this.mc_pixel_tile_26},{t:this.mc_pixel_tile_25},{t:this.mc_pixel_tile_24},{t:this.mc_pixel_tile_23},{t:this.mc_pixel_tile_22},{t:this.mc_pixel_tile_21},{t:this.mc_pixel_tile_20},{t:this.mc_pixel_tile_19},{t:this.mc_pixel_tile_18},{t:this.mc_pixel_tile_17},{t:this.mc_pixel_tile_16},{t:this.mc_pixel_tile_15},{t:this.mc_pixel_tile_14},{t:this.mc_pixel_tile_13},{t:this.mc_pixel_tile_12},{t:this.mc_pixel_tile_11},{t:this.mc_pixel_tile_10},{t:this.mc_pixel_tile_9},{t:this.mc_pixel_tile_8},{t:this.mc_pixel_tile_7},{t:this.mc_pixel_tile_6},{t:this.mc_pixel_tile_5},{t:this.mc_pixel_tile_4},{t:this.mc_pixel_tile_3},{t:this.mc_pixel_tile_2},{t:this.mc_pixel_tile_1},{t:this.mc_pixel_tile}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,-5,962,1288.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;