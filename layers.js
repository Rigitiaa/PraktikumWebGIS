var wms_layers = [];

var format_univ_surabaya_0 = new ol.format.GeoJSON();
var features_univ_surabaya_0 = format_univ_surabaya_0.readFeatures(json_univ_surabaya_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_0.addFeatures(features_univ_surabaya_0);
var lyr_univ_surabaya_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_0, 
                style: style_univ_surabaya_0,
                popuplayertitle: "univ_surabaya",
                interactive: true,
                title: '<img src="styles/legend/univ_surabaya_0.png" /> univ_surabaya'
            });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: "aksesibilitas_univ — union",
                interactive: true,
                title: '<img src="styles/legend/aksesibilitas_univunion_1.png" /> aksesibilitas_univ — union'
            });
var lyr_its_manyar_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "its_manyar",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/its_manyar_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -197.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_its_sukolilo_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "its_sukolilo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/its_sukolilo_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_uin_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "uin",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/uin_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_unair_a_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "unair_a",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/unair_a_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -198.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_unair_b_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "unair_b",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/unair_b_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -270.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_unair_c_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "unair_c",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/unair_c_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -252.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_unesa_ketintang_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "unesa_ketintang",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/unesa_ketintang_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_unesa_lidahwetan_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "unesa_lidahwetan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/unesa_lidahwetan_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -263.000000, 350.000000, 0.000000]
                            })
                        });
var lyr_upnv_jatim_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "upnv_jatim",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/upnv_jatim_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [0.000000, -350.000000, 350.000000, 0.000000]
                            })
                        });

lyr_univ_surabaya_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_its_manyar_2.setVisible(true);lyr_its_sukolilo_3.setVisible(true);lyr_uin_4.setVisible(true);lyr_unair_a_5.setVisible(true);lyr_unair_b_6.setVisible(true);lyr_unair_c_7.setVisible(true);lyr_unesa_ketintang_8.setVisible(true);lyr_unesa_lidahwetan_9.setVisible(true);lyr_upnv_jatim_10.setVisible(true);
var layersList = [lyr_univ_surabaya_0,lyr_aksesibilitas_univunion_1,lyr_its_manyar_2,lyr_its_sukolilo_3,lyr_uin_4,lyr_unair_a_5,lyr_unair_b_6,lyr_unair_c_7,lyr_unesa_ketintang_8,lyr_unesa_lidahwetan_9,lyr_upnv_jatim_10];
lyr_univ_surabaya_0.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', });
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_0.set('fieldImages', {'fid': '', 'Nama': '', 'Kampus': '', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': '', 'Access': '', });
lyr_univ_surabaya_0.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_aksesibilitas_univunion_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});