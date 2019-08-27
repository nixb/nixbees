function display_img_tab(i) {
    localStorage.setItem("img_tabs", i);
    document.getElementById("img_tab").innerHTML="<div class=\"col-md-12\">\n" +
        "                    <script>\n" +
        "                        function  fun(ii) {\n" +
        "                            localStorage.setItem(\"hitIndex\", ii);\n" +
        "                            window.location.href='designStlview.html';\n" +
        "\n" +
        "                        }\n" +
        "                    </script>\n" +
        "                    <div id=\"cardssss\" class=\"row\">\n" +
        "\n" +
        "                    </div>\n" +
        "                    <script>\n" +
        "                        var img=[\n" +
        "                            ['images/toys/new_poly_space_toys/toy21.jpg',\n" +
        "                            'images/toys/Lego%20Castle/toy1.jpg',\n" +
        "                            'images/toys/Alen_toy/alen1.jpg'],\n" +
        "                            ['images/toys/new_poly_space_toys/toy21.jpg',\n" +
        "                                'images/toys/Lego%20Castle/toy1.jpg',\n" +
        "                                'images/toys/Alen_toy/alen1.jpg'],\n" +
        "                            ['images/toys/new_poly_space_toys/toy21.jpg',\n" +
        "                                'images/toys/Lego%20Castle/toy1.jpg',\n" +
        "                                'images/toys/Alen_toy/alen1.jpg'],\n" +
        "                            ['images/toys/new_poly_space_toys/toy21.jpg',\n" +
        "                                'images/toys/Lego%20Castle/toy1.jpg',\n" +
        "                                'images/toys/Alen_toy/alen1.jpg'],\n" +
        "                            ['images/toys/new_poly_space_toys/toy21.jpg',\n" +
        "                                'images/toys/Lego%20Castle/toy1.jpg',\n" +
        "                                'images/toys/Alen_toy/alen1.jpg'],\n" +
        "                            ['images/toys/new_poly_space_toys/toy21.jpg',\n" +
        "                                'images/toys/Lego%20Castle/toy1.jpg',\n" +
        "                                'images/toys/Alen_toy/alen1.jpg'],\n" +
        "                            ['images/toys/new_poly_space_toys/toy21.jpg',\n" +
        "                                'images/toys/Lego%20Castle/toy1.jpg',\n" +
        "                                'images/toys/Alen_toy/alen1.jpg'],\n" +
        "                        ];\n" +
        "                        var val=\"\";\n" +
        "                        for(var i=0;i<img[parseInt(localStorage.getItem(\"img_tabs\"))].length;i++)\n" +
        "                        {\n" +
        "                            val+=\" <div class=\\\"col-sm-3\\\" style=\\\"cursor: pointer;\\\">\\n\" +\n" +
        "                                \"                <img width='200' height='200' src=\\\"\"+img[parseInt(localStorage.getItem(\"img_tabs\"))][i]+\"\\\" width=\\\"100%\\\" onclick=\\\"fun('\"+i+\"')\\\">\\n\" +\n" +
        "                                \"            </div>\";\n" +
        "                        }\n" +
        "                        document.getElementById(\"cardssss\").innerHTML=val;\n" +
        "                    </script>\n" +
        "                </div>";
}