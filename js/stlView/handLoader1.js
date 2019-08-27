if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var camera, scene, renderer;


var v=[

    [
        [
            'https://cdn.thingiverse.com/assets/cd/03/b2/37/fe/Loggerhead_NoFuse_front.STL',
            'https://cdn.thingiverse.com/assets/1b/bd/90/40/53/Loggerhead_NoFuseJoints_plated.STL',
        ],
        [
            'https://cdn.thingiverse.com/assets/57/c0/cb/4d/f8/squirrel.stl',
        ],
        [
            'https://cdn.thingiverse.com/assets/44/ff/5f/71/b9/panther_001.stl',
        ],
        [
            'https://cdn.thingiverse.com/assets/ce/66/14/71/a7/doggyCut_1.stl',
            'https://cdn.thingiverse.com/assets/29/a1/ca/a8/5a/doggy7Cut_2.stl',
            'https://cdn.thingiverse.com/assets/0c/04/d3/58/33/doggy7.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/90/b9/c1/0c/fc/Toy_horse_two_halves.stl',
            'https://cdn.thingiverse.com/assets/48/b2/0c/42/a4/Toy_horse_two_halves_v2.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/12/cd/52/8b/7c/horse.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/f8/f0/57/f4/b8/Elephant.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/ff/52/ba/bc/02/Ape.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/04/3f/68/fa/2a/Black_Bear.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/53/aa/09/ae/f5/Badger.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/75/52/28/2b/c5/Elk.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/9f/e9/6c/84/97/Camel.stl'
        ]

    ],
    [
        [
            'https://cdn.thingiverse.com/assets/1f/04/80/3e/08/crisrtina2.STL',
        ],
        [
            'https://cdn.thingiverse.com/assets/c0/72/66/30/a8/Korean_Traditional_Architecture_Coin_Bank_printing.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/76/81/6d/e7/35/PAK_3__Roof_Windows.STL',
            'https://cdn.thingiverse.com/assets/b1/e5/75/9c/8e/PAK_3__Roof_Wall_001.STL',
            'https://cdn.thingiverse.com/assets/88/7e/62/a6/ed/PAK_3__Steps_001.STL',
            'https://cdn.thingiverse.com/assets/8c/3c/4c/0f/e2/PAK_3_T_Columns.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/7c/41/2a/0a/ce/stair.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/a4/ba/41/db/f5/DC_Capitol_Left.stl',
            'https://cdn.thingiverse.com/assets/30/33/3e/1e/e7/DC_Capitol_R.stl',
            'https://cdn.thingiverse.com/assets/1f/7a/e4/80/bd/DC_Captial_M.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/e1/77/e8/ed/ec/Architecture.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/a3/a1/00/69/23/1970_ford_mustang.stl',
            'https://cdn.thingiverse.com/assets/72/31/9c/e4/cd/Architecture_model.stl',
            'https://cdn.thingiverse.com/assets/03/c4/b0/1b/62/Tree.STL',
            'https://cdn.thingiverse.com/assets/63/cb/e7/2f/a0/Fence-left.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/3a/3c/10/92/3c/FreshMarket.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/e3/68/01/e3/1d/furniture.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/5b/eb/47/47/61/house.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/65/53/ac/fe/44/1_fixed_1_.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/72/44/0d/d9/d2/Cube-Mondrian_Ring.obj'
        ]
    ],
    [
        [
            'https://cdn.thingiverse.com/assets/66/10/6c/b0/bc/Mario_Luigi_Art_-_We3dUK.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/0a/3a/66/b4/22/Scorpion_Art.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/11/df/93/a0/a5/maapallo.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/be/02/b6/7f/ba/100_percent_of_scale_178.75mm_tall_QGR_QSN_sticksballs_RWGresearch_2-17-17.stl',
        ],
        [
            'https://cdn.thingiverse.com/assets/12/bd/b3/6e/1b/iphone_case_V2.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/be/3e/ed/52/15/WeeksB_HairOrnV2-Part1.stl',
            'https://cdn.thingiverse.com/assets/48/df/b5/48/7c/WeeksB_HairOrnV2-Single.STL',
            'https://cdn.thingiverse.com/assets/6c/8c/67/96/c6/WeeksB_HairOrnV2-Part2.stl',
            'https://cdn.thingiverse.com/assets/4d/a2/d8/6a/ef/WeeksB_HairOrnV1.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/14/1d/79/76/b6/mothersday.stl',
            'https://cdn.thingiverse.com/assets/b8/97/01/42/a3/mum.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/02/91/11/10/44/lion.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/c4/d3/41/9f/da/Reduced_wire_frame_wolf_head.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/9f/10/ce/ca/45/Humming_Bird.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/31/70/9f/a2/a1/kirito_mk2.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/04/57/f5/33/09/canvas_art_holder.STL'
        ]
    ],
    [
        [
            'https://cdn.thingiverse.com/assets/f4/a3/b7/3b/74/Atom_Pendant_mm.stl',
            'https://cdn.thingiverse.com/assets/3d/86/c1/4a/d7/Atom_Pendant_V2_mm.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/98/78/de/22/28/gancetto.stl',
            'https://cdn.thingiverse.com/assets/6e/4a/da/63/de/bianco.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/d0/9e/c5/f1/61/Bon_Garcon_BowTie-V1.02.stl',
            'https://cdn.thingiverse.com/assets/0e/88/f0/93/60/Bon_Garcon_BowTie.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/f3/3f/34/24/53/Star_Wars_Ring_Stormtrooper_01.stl.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/78/c3/b6/b5/2a/DG_Frame_1_v2_v_rebuilt.stl',
            'https://cdn.thingiverse.com/assets/22/a0/23/a4/59/DG_Frame_2_v_rebuilt.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/df/51/62/24/65/Fashion_Bracelet_more_closure.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/88/6e/27/04/36/AsherLevine_Front_Frame.STL',
            'https://cdn.thingiverse.com/assets/54/ea/bb/d1/5e/BothSides.STL',
            'https://cdn.thingiverse.com/assets/08/32/33/c8/4c/L_Lense.stl',
            'https://cdn.thingiverse.com/assets/6e/db/ce/7d/1f/R_Lense.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/eb/6f/23/ad/55/FashionShoeStyle-Base.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/0c/ce/c4/70/e7/chainmail_flowalistik.stl',
            'https://cdn.thingiverse.com/assets/5e/82/12/22/fe/chainmail_flowalistik_sample.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/c3/71/d6/29/71/wallet2.stl,' +
            'https://cdn.thingiverse.com/assets/8d/89/37/a0/2a/wallet2_v4c.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/42/b9/16/5c/aa/BOWTIE.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/b2/db/1b/47/40/Tree_Earrings.stl',
            'https://cdn.thingiverse.com/assets/bf/17/89/8f/00/Tree_Decoration.stl'
        ]
    ],
    [
        [
            'https://cdn.thingiverse.com/assets/61/5b/15/2b/cd/chassis_e_scritte_argento.stl',
            'https://cdn.thingiverse.com/assets/ef/dd/1f/71/2c/bordi_e_fili_neri.stl',
            'https://cdn.thingiverse.com/assets/06/d6/98/5f/da/flusso_trasparente.stl',
            'https://cdn.thingiverse.com/assets/8e/bf/aa/32/58/contatti_oro.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/0a/c0/e7/ca/16/bikemount-tiewrap-25mm.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/02/0c/ac/23/2d/box_lid.stl',
            'https://cdn.thingiverse.com/assets/96/31/0e/8d/ee/jewel_gadget_lvl_II.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/34/a9/9b/c6/21/plug_stand_us.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/96/c2/2e/6f/38/Apple-Pencil-Gadget.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/5b/97/4c/34/9b/estintore-piccolo.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/b2/02/6d/1c/3e/binda.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/ec/f6/e3/ec/25/KeyRing_fixed.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/f8/c4/66/9a/39/Gadget_Enclosure.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/cf/51/81/e4/f3/StrawGlass_0.5mm.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/d9/4b/2b/bd/3c/X-Belt-Quicktension.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/40/15/a3/51/bb/lemonbolt.stl'
        ]
    ],
    [
        [
            'https://cdn.thingiverse.com/assets/24/e7/2d/1c/ef/LR_Model_Print_Cleaned.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/bf/dc/b1/16/47/God_Ganesha.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/7e/8b/a9/36/c5/God_Vishnu_Riding_on_His_Mount_Garuda_.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/b3/42/ab/0f/c6/Shivling_w_support.stl',
            'https://cdn.thingiverse.com/assets/7c/31/f6/2e/ae/Shivling.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/c9/0e/f2/b4/aa/Ver_1.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/43/d7/4b/00/ad/God.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/8d/c9/f6/e1/dc/xochipilli_low_15_fixed.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/e0/87/bc/fe/e3/God_is_love.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/3e/98/bd/28/8f/tiki2_HighPoly.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/b0/6a/26/27/aa/hornedgodpentagram_amulet.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/58/3d/02/be/5d/print.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/6e/da/e4/6e/77/Giza_slide.stl',
            'https://cdn.thingiverse.com/assets/c3/2d/be/6b/f8/Giza_main.stl'
        ]
    ],
    [
        [
            'https://cdn.thingiverse.com/assets/5e/ce/34/b8/c8/guitar_pick_holder_v1.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/e5/98/fa/e8/8b/Body.stl',
            'https://cdn.thingiverse.com/assets/af/84/a8/8d/a8/Neck.stl',
            'https://cdn.thingiverse.com/assets/16/08/c4/63/13/Head.stl',
            'https://cdn.thingiverse.com/assets/82/7b/c2/73/f8/Left_Leg.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/df/29/86/9a/da/finalletras.stl',
            'https://cdn.thingiverse.com/assets/2b/65/61/28/b2/final2.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/5d/fa/d6/90/76/ShowerHandleHolder.STL.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/53/3a/07/cf/02/door_x.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/55/26/a0/d5/8f/Pirate_Chest_FINAL_FINAL_STL.STL',
            'https://cdn.thingiverse.com/assets/51/c8/f6/3f/d8/Pirate_Chest_top_FINAL_FINAL_STL.STL',
            'https://cdn.thingiverse.com/assets/1f/d4/10/c4/9b/hinge_FINAL_STL.STL',
            'https://cdn.thingiverse.com/assets/48/1d/84/0d/de/one_FINAL.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/a5/73/50/ec/d0/Fork.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/65/6c/54/ce/20/Spoon.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/c5/e4/a7/94/56/Tube_Roller.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/6b/86/a4/d3/38/bagHolder.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/b2/9f/0d/a3/fd/Schlage-Key-Decoder.stl',
            'https://cdn.thingiverse.com/assets/7f/16/46/32/46/Key-Decoder-Larger-Letters.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/1a/50/b4/fd/9e/spoonrider_bre.stl',
            'https://cdn.thingiverse.com/assets/43/40/6f/1a/2e/spoonrider_patrick.stl'
        ]
    ],
    [
        [
            'https://cdn.thingiverse.com/assets/65/f3/de/c8/75/BrailleLearningBoardV2.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/b0/2e/28/17/9e/1.STL',
            'https://cdn.thingiverse.com/assets/20/a0/0a/84/c0/2.STL',
            'https://cdn.thingiverse.com/assets/fb/18/66/3e/60/3.STL',
            'https://cdn.thingiverse.com/assets/63/19/d1/49/b6/4.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/d3/c4/28/77/5b/LB_raptor_hand_4_finger_set.stl',
            'https://cdn.thingiverse.com/assets/9e/44/ac/9a/49/LB_Double_Finger_Pins.stl',
            'https://cdn.thingiverse.com/assets/2f/d6/70/e6/ea/LB_raptor_hand_1_finger.stl',
            'https://cdn.thingiverse.com/assets/0c/ea/1e/a9/66/LB_Example_File.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/87/02/a1/89/3b/earthquake_top_.stl',
            'https://cdn.thingiverse.com/assets/1d/39/f8/20/ff/earthquake_bottom.stl',
            'https://cdn.thingiverse.com/assets/f7/e4/76/e9/41/springs.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/93/ae/20/67/4d/Head.STL',
            'https://cdn.thingiverse.com/assets/32/d5/06/78/e5/Skull.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/9a/3b/f5/4e/7a/learning_chopsticks2.stl',
            'https://cdn.thingiverse.com/assets/48/25/6b/e9/94/learning_chopsticks1.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/39/f8/17/41/c5/Board.obj',
            'https://cdn.thingiverse.com/assets/4f/41/c5/3c/77/elements.obj'
        ],
        [
            'https://cdn.thingiverse.com/assets/00/6f/3e/84/fc/learning_ruler_2_4.stl',
            'https://cdn.thingiverse.com/assets/d7/c3/a0/4b/d5/f3GSeFlF0OV_2.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/79/17/5e/21/b0/polysoup.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/ba/7e/94/9d/0d/geoplano.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/0c/d5/7d/02/d5/2_easy_gyro_test.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/90/d3/b8/bd/a4/shark.stl'
        ]
    ],
    [
        [
            'https://cdn.thingiverse.com/assets/58/1b/af/64/29/toy1_lowpoly_body.STL',
            'https://cdn.thingiverse.com/assets/ee/c8/af/d0/24/toy1_lowpoly_head.STL',
        ],
        [
            'https://cdn.thingiverse.com/assets/0e/68/6a/0b/f9/ALIEN.stl',
            'https://cdn.thingiverse.com/assets/91/68/c2/32/ee/ALIEN_head.stl',
            'https://cdn.thingiverse.com/assets/4d/e9/60/12/b0/ALIEN_body.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/03/fc/4b/7c/c0/hemi_25.stl',
            'https://cdn.thingiverse.com/assets/45/d4/2a/13/e5/sphere_25.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/2f/03/62/f4/31/Std_Pull_Toy_assy_with_horse.stl',
            'https://cdn.thingiverse.com/assets/21/6f/df/6a/c6/Std_base.stl',
            'https://cdn.thingiverse.com/assets/df/71/51/32/9a/wheel_moulded.stl',
            'https://cdn.thingiverse.com/assets/65/0c/56/a4/30/Axle_Pin.stl',
            'https://cdn.thingiverse.com/assets/86/04/71/01/27/Horse.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/48/08/02/08/d3/KACA-ORBITAL02.STL',
            'https://cdn.thingiverse.com/assets/6a/3f/31/19/c1/KACA-ORBITAL01.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/2d/46/f1/ec/df/20_Cent_Fidget_Toy.stl',
            'https://cdn.thingiverse.com/assets/28/15/c5/3b/e1/Fiddy_Cent_Fidget_Toy_smaller.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/9b/80/06/fd/85/toy_5a.stl',
            'https://cdn.thingiverse.com/assets/a6/05/21/58/22/toy_6a.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/0e/3c/c4/8c/20/SPIN_TOP.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/56/22/95/96/42/lamptoys.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/4a/eb/83/0d/39/polygontoys-open-4.stl',
            'https://cdn.thingiverse.com/assets/9f/28/31/a0/c2/polygontoys-4.stl'
        ],
        [
            'https://cdn.thingiverse.com/assets/9c/79/7e/eb/be/lilioyuncak.STL'
        ],
        [
            'https://cdn.thingiverse.com/assets/54/e4/4a/7d/38/DH010.STL',
            'https://cdn.thingiverse.com/assets/c3/20/6e/f0/48/DD007.STL'
        ]

    ]


];

function init(path) {
  console.log("safsa");
  scene = new THREE.Scene();
  scene.add( new THREE.AmbientLight( 0x999999 ) );

  camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 500 );

  // Z is up for objects intended to be 3D printed.

  camera.up.set( 0, 0, 1 );
  camera.position.set( 0, -9, 6 );

  camera.add( new THREE.PointLight( 0xffffff, 0.8 ) );

  scene.add( camera );





  var grid = new THREE.GridHelper( 25, 50, 0xffffff, 0x555555 );
  grid.rotateOnAxis( new THREE.Vector3( 1, 0, 0 ), 90 * ( Math.PI/180 ) );
  scene.add( grid );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setClearColor( 0x999999 );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var loader = new THREE.STLLoader();

  console.log("sdf");
  // Binary files

  var material = new THREE.MeshPhongMaterial( { color: 0x0e2045, specular: 0x111111, shininess: 200 } );
  loader.load( v[parseInt(localStorage.getItem("categoryInd"))][parseInt(localStorage.getItem("hitIndex"))][parseInt(localStorage.getItem("stl"))], function ( geometry ) {
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.set( 0, 0, 0 );
    mesh.rotation.set( 0, 0, 0 );
    mesh.scale.set( .08, .06, .08 );

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add( mesh );
    render();



  });

  var controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.addEventListener( 'change', render );
  controls.target.set( 0, 1.2, 2 );
  controls.update();
  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

  render();

}

function render() {

  renderer.render( scene, camera );

}
