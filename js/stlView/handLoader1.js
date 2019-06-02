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
            'https://cdn.thingiverse.com/assets/1f/7a/e4/80/bd/DC_Captial_M.stl'],
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
    mesh.scale.set( .02, .02, .02 );

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
