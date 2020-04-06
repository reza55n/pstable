#target photoshop

drawTable();

function drawRECT(x,y,xx,yy,r,g,b,w)
{
	var idMk = charIDToTypeID( "Mk  " );
		var desc3 = new ActionDescriptor();
		var idnull = charIDToTypeID( "null" );
			var ref1 = new ActionReference();
			var idcontentLayer = stringIDToTypeID( "contentLayer" );
			ref1.putClass( idcontentLayer );
		desc3.putReference( idnull, ref1 );
		var idUsng = charIDToTypeID( "Usng" );
			var desc4 = new ActionDescriptor();
			var idType = charIDToTypeID( "Type" );
				var desc5 = new ActionDescriptor();
				var idClr = charIDToTypeID( "Clr " );
					var desc6 = new ActionDescriptor();
					var idRd = charIDToTypeID( "Rd  " );
					desc6.putDouble( idRd, r );
					var idGrn = charIDToTypeID( "Grn " );
					desc6.putDouble( idGrn, g );
					var idBl = charIDToTypeID( "Bl  " );
					desc6.putDouble( idBl, b );
				var idRGBC = charIDToTypeID( "RGBC" ); //These are BG colors, in this case are visible only in Color picker
				desc5.putObject( idClr, idRGBC, desc6 );
			var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
			desc4.putObject( idType, idsolidColorLayer, desc5 );
			var idShp = charIDToTypeID( "Shp " );
				var desc7 = new ActionDescriptor();
				var idunitValueQuadVersion = stringIDToTypeID( "unitValueQuadVersion" );
				desc7.putInteger( idunitValueQuadVersion, 1 );
				var idTop = charIDToTypeID( "Top " );
				var idPxl = charIDToTypeID( "#Pxl" );
				desc7.putUnitDouble( idTop, idPxl, y );
				var idLeft = charIDToTypeID( "Left" );
				var idPxl = charIDToTypeID( "#Pxl" );
				desc7.putUnitDouble( idLeft, idPxl, x );
				var idBtom = charIDToTypeID( "Btom" );
				var idPxl = charIDToTypeID( "#Pxl" );
				desc7.putUnitDouble( idBtom, idPxl, yy );
				var idRght = charIDToTypeID( "Rght" );
				var idPxl = charIDToTypeID( "#Pxl" );
				desc7.putUnitDouble( idRght, idPxl, xx );
				var idtopRight = stringIDToTypeID( "topRight" );
				var idPxl = charIDToTypeID( "#Pxl" );
				desc7.putUnitDouble( idtopRight, idPxl, -1.000000 );
				var idtopLeft = stringIDToTypeID( "topLeft" );
				var idPxl = charIDToTypeID( "#Pxl" );
				desc7.putUnitDouble( idtopLeft, idPxl, -1.000000 );
				var idbottomLeft = stringIDToTypeID( "bottomLeft" );
				var idPxl = charIDToTypeID( "#Pxl" );
				desc7.putUnitDouble( idbottomLeft, idPxl, -1.000000 );
				var idbottomRight = stringIDToTypeID( "bottomRight" );
				var idPxl = charIDToTypeID( "#Pxl" );
				desc7.putUnitDouble( idbottomRight, idPxl, -1.000000 );
			var idRctn = charIDToTypeID( "Rctn" );
			desc4.putObject( idShp, idRctn, desc7 );
			var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
				var desc8 = new ActionDescriptor();
				var idstrokeStyleVersion = stringIDToTypeID( "strokeStyleVersion" );
				desc8.putInteger( idstrokeStyleVersion, 2 );
				var idstrokeEnabled = stringIDToTypeID( "strokeEnabled" );
				desc8.putBoolean( idstrokeEnabled, true );
				var idfillEnabled = stringIDToTypeID( "fillEnabled" );
				desc8.putBoolean( idfillEnabled, false );
				var idstrokeStyleLineWidth = stringIDToTypeID( "strokeStyleLineWidth" );
				var idPnt = charIDToTypeID( "#Pnt" );
				desc8.putUnitDouble( idstrokeStyleLineWidth, idPnt, w );
				var idstrokeStyleLineDashOffset = stringIDToTypeID( "strokeStyleLineDashOffset" );
				var idPnt = charIDToTypeID( "#Pnt" );
				desc8.putUnitDouble( idstrokeStyleLineDashOffset, idPnt, 0.000000 );
				var idstrokeStyleMiterLimit = stringIDToTypeID( "strokeStyleMiterLimit" );
				desc8.putDouble( idstrokeStyleMiterLimit, 100.000000 );
				var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" );
				var idstrokeStyleLineCapType = stringIDToTypeID( "strokeStyleLineCapType" );
				var idstrokeStyleButtCap = stringIDToTypeID( "strokeStyleButtCap" );
				desc8.putEnumerated( idstrokeStyleLineCapType, idstrokeStyleLineCapType, idstrokeStyleButtCap );
				var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" );
				var idstrokeStyleLineJoinType = stringIDToTypeID( "strokeStyleLineJoinType" );
				var idstrokeStyleMiterJoin = stringIDToTypeID( "strokeStyleMiterJoin" );
				desc8.putEnumerated( idstrokeStyleLineJoinType, idstrokeStyleLineJoinType, idstrokeStyleMiterJoin );
				var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" );
				var idstrokeStyleLineAlignment = stringIDToTypeID( "strokeStyleLineAlignment" );
				var idstrokeStyleAlignCenter = stringIDToTypeID( "strokeStyleAlignCenter" );
				desc8.putEnumerated( idstrokeStyleLineAlignment, idstrokeStyleLineAlignment, idstrokeStyleAlignCenter );
				var idstrokeStyleScaleLock = stringIDToTypeID( "strokeStyleScaleLock" );
				desc8.putBoolean( idstrokeStyleScaleLock, false );
				var idstrokeStyleStrokeAdjust = stringIDToTypeID( "strokeStyleStrokeAdjust" );
				desc8.putBoolean( idstrokeStyleStrokeAdjust, false );
				var idstrokeStyleLineDashSet = stringIDToTypeID( "strokeStyleLineDashSet" );
					var list1 = new ActionList();
				desc8.putList( idstrokeStyleLineDashSet, list1 );
				var idstrokeStyleBlendMode = stringIDToTypeID( "strokeStyleBlendMode" );
				var idBlnM = charIDToTypeID( "BlnM" );
				var idNrml = charIDToTypeID( "Nrml" );
				desc8.putEnumerated( idstrokeStyleBlendMode, idBlnM, idNrml );
				var idstrokeStyleOpacity = stringIDToTypeID( "strokeStyleOpacity" );
				var idPrc = charIDToTypeID( "#Prc" );
				desc8.putUnitDouble( idstrokeStyleOpacity, idPrc, 100.000000 );
				var idstrokeStyleContent = stringIDToTypeID( "strokeStyleContent" );
					var desc9 = new ActionDescriptor();
					var idClr = charIDToTypeID( "Clr " );
						var desc10 = new ActionDescriptor();
						var idRd = charIDToTypeID( "Rd  " );
						desc10.putDouble( idRd, r );
						var idGrn = charIDToTypeID( "Grn " );
						desc10.putDouble( idGrn, g );
						var idBl = charIDToTypeID( "Bl  " );
						desc10.putDouble( idBl, b );
					var idRGBC = charIDToTypeID( "RGBC" );
					desc9.putObject( idClr, idRGBC, desc10 );
				var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
				desc8.putObject( idstrokeStyleContent, idsolidColorLayer, desc9 );
				var idstrokeStyleResolution = stringIDToTypeID( "strokeStyleResolution" );
				desc8.putDouble( idstrokeStyleResolution, 96.011993 );
			var idstrokeStyle = stringIDToTypeID( "strokeStyle" );
			desc4.putObject( idstrokeStyle, idstrokeStyle, desc8 );
		var idcontentLayer = stringIDToTypeID( "contentLayer" );
		desc3.putObject( idUsng, idcontentLayer, desc4 );
	executeAction( idMk, desc3, DialogModes.NO );
}

function drawTable()
{
	var act = app.activeDocument;
	var layer = act.activeLayer;

	var x=layer.bounds[0].as("px");
	var y=layer.bounds[1].as("px");
	var xx=layer.bounds[2].as("px");
	var yy=layer.bounds[3].as("px");
	var w=xx-x;
	var h=yy-y;

	if (w<=0 || h<=0)
	{
		alert("Invalid dimensions.");
		return;
	}

var Colour = app.foregroundColor;
var R = Colour.rgb.red.toFixed(2);
var G = Colour.rgb.green.toFixed(2);
var B = Colour.rgb.blue.toFixed(2);
var done=false;

var dlg = new Window('dialog','Draw a Table');
    dlg.colorBtn = dlg.add('button',undefined,'Change Color');
	dlg.add ("statictext", undefined, "Rows:");
	var edRow = dlg.add ("edittext", [0,0,40,20],"4");
	dlg.add ("statictext", undefined, "Cols:");
	var edCol = dlg.add ("edittext", [0,0,40,20],"3");
	dlg.add ("statictext", undefined, "Cells Thick(pt):");
	var edCell = dlg.add ("edittext", [0,0,40,20],"0.75");
	dlg.add ("statictext", undefined, "Border Thick(pt):");
	var edBorder = dlg.add ("edittext", [0,0,40,20],"2");
    dlg.ok = dlg.add('button',undefined,'OK');
    dlg.colorBtn.onClick = function(){
		var cP = showColorPicker()  
		if(cP){
			R = foregroundColor.rgb.red
			G = foregroundColor.rgb.green
			B = foregroundColor.rgb.blue
		}
	}
    dlg.ok.onClick = function(){done=true;dlg.close();}
    dlg.show()

	if (!done)
		return;

	var bWd = parseFloat(edBorder.text); //Border Width
	var cWd = parseFloat(edCell.text); //Cell Width
	var r = parseInt(edRow.text);
	var c = parseInt(edCol.text);
	var rH = h/r; //Row Height
	var cW = w/c; //Column Width

	var ls = act.layerSets.add();
	ls.name="Table";
	
	var rows = ls.layerSets.add();
	rows.name="Rows";
	for (i=rH;i<(h-(rH/2));i+=rH*2)
	{
		drawRECT(x,y+i,xx,y+i+rH,R,G,B,cWd);
	}

	var cols = ls.layerSets.add();
	cols.name="Columns";
	for (i=cW;i<(w-(cW/2));i+=cW*2)
	{
		drawRECT(x+i,y,x+i+cW,yy,R,G,B,cWd);
	}
	
	act.activeLayer=ls;
	drawRECT(x,y,xx,yy,R,G,B,bWd); //It's after other codes to make border above cells
}
