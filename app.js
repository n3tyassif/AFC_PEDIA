  function optimiserImageCloudinary(url, format) {
    if (!url || !url.includes('/upload/')) return url;
    
    if (format === 'basse') {
        
        return url.replace('/upload/', '/upload/w_200,h_280,c_fill,g_auto,f_auto,q_auto:eco/');
    } else if (format === 'haute') {
      
        return url.replace('/upload/', '/upload/w_800,f_auto,q_auto:best/');
    }
    return url;
}
const jeux2026 = [
    { nom: "crimson desert", img: "https://i.postimg.cc/wMt6m1HD/image.png", twitch: "https://youtu.be/TmnKSnxcAJ0?si=re8zazorMh8I3oho" },
    { nom: "directive 8020", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/dbeae5ea95e461872c819969fa8f47c4_fkahjr", twitch: "https://twitchtracker.com/femimarss/games/1977278621", statut: "drop" },
    { nom: "Five Hearts Under One Roof 2", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/4c87373b6affe20b20459ad5b80158cc_yxtwvy", twitch: "https://www.youtube.com/watch?v=3tPZDh1KU5Q" }, 
    { nom: "hytale", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/78a59ca45dcf25e610701df40b776789_wgmtqh", twitch: "https://twitchtracker.com/femimarss/streams/315784254180" },
    { nom: "league of legends", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/cf29ee336b07c0572c810f62f5543525_zt7opw", twitch: "https://twitchtracker.com/femimarss/games/21779" },
    { nom: "MONSTER HUNTER STORIES 3: TWISTED REFLECTION", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/7331f24f2ecb1a42588a460129ccc214_jsrjur", twitch: "https://youtu.be/LJCZtwlJkbs?si=Z1YXGPtGrDC4Z433" },
    { nom: "my voice zoo", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/119c7226962c95086bb26fd0ae59c29e_svkqgd", twitch: "https://www.youtube.com/watch?v=3GuuogBGlR4" },
    { nom: "pokopia", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/0f78d889461190857b379ce9b2e063a7_nzvdfm", twitch: "https://youtu.be/fFn9sVc6YAU?si=JUnFJR1XBOmiEXeW" },
    { nom: "poppy playtime chapter 5", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/a58d5c817f22a22875f3a5632c36cde3_izwgth", twitch: "https://youtu.be/bJ2QgCJW7sA?si=QzH605kXE8lpiM8x" },
    { nom: "reanimal", img: "./assets/img/jeux/reanimal.png", twitch: "https://youtu.be/CiH4KSuScFM?si=VYC3lxDEBSvBWZps" },
    { nom: "RESIDENT EVIL: requiem", img: "./assets/img/jeux/re9.png", twitch: "https://youtu.be/mWamIj7_Pik?si=6wv8bP_xRAg7xmDn" },
    { nom: "Roadside Research", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/55895cf0fabd754b2bc974cc295d06f1_tib1t4", twitch: "https://twitchtracker.com/femimarss/games/121660419" },
    { nom: "tomodachi life living your dreams", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/e4efc746696d9f37472de81cbad04179_rbfals", twitch: "https://www.youtube.com/watch?v=Gw6yUlIeB5k&list=PLmGhvPN6RD4UxxkXLEpAZqp8pIusaSNqy&index=3" },
    { nom: "trees hate you", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/f1e252da269c86120afc3d75e109af15_agnjf2", twitch: "https://www.youtube.com/watch?v=63lIzzJLpo0" },
    { nom: "yapyap", img: "https://i.postimg.cc/dtWS6jGT/image.png", twitch: "https://twitchtracker.com/femimarss/games/976777994" }
];

const jeux2025 = [
    { nom: "60 seconds!", img: "https://i.postimg.cc/qv1PSdnj/image.png", twitch: "https://youtu.be/YsSifJAGVDQ?si=V8GwHC8leUpSEYuX" },
    { nom: "agar.io", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/4f2465d3ccc65c6986eb924da739f005_hj8cok", twitch: "https://twitchtracker.com/femimarss/games/489594" },
    { nom: "Amenti", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/amenti_cdkeys_ye6efs", twitch: "https://www.youtube.com/watch?v=n5QMLP24-Tw" },
    { nom: "baby steps", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/e3ae8a6d7bee76bd02166d77ac6ce709_saalgb", twitch: "https://youtu.be/zthoXD641ck?si=KneHh1Max9zkIVZQ" },
    { nom: "BeamNG.drive", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/MV5BNmQyNTY1MDgtZWIyYi00MTg1LWIwNDktZmNkMjMzNTZlNzJkXkEyXkFqcGc._V1_FMjpg_UX1000__sihvjo", twitch: "https://twitchtracker.com/femimarss/games/491878" },
    { nom: "Buckshot Roulette", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/1f0597296cd2940b991a4542c1c48a25_kphweg", twitch: "https://www.youtube.com/watch?v=O9IFFztOD-U" },
    { nom: "Chained Together", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/2a0c42d296cf1c678179d4731694e667_ttigp3", twitch: "https://www.youtube.com/watch?v=1qNw4m3q_ck" },
    { nom: "Clair Obscur: Expedition 33", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_800,f_auto,q_auto/library_600x900_2x_k3nh8m", twitch: "https://youtube.com/playlist?list=PLmGhvPN6RD4X_OUqXQ9qTQIMUEWfJ0y9v&si=v7mFh1e9EHM10H2C" },
    { nom: "dispatch", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_600x900_2x_s0yj0n", twitch: "https://twitchtracker.com/femimarss/games/602959317" },
    { nom: "Drive Beyond Horizons", img: "https://i.postimg.cc/zfBFtsS0/image.png", twitch: "https://youtu.be/_lPhgj4mjS8?si=Fz5umMYLm7UWRMT2" },
    { nom: "Driving Is Hard", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/Driving-Is-Hard-Main-Art-900x900_bs4lhc", twitch: "https://www.youtube.com/watch?v=9B0Wu0mMHIc" },
    { nom: "euro truck simulator 2", img: "https://i.postimg.cc/bJCkzzXr/image.png", twitch: "https://twitchtracker.com/femimarss/games/75467" },
    { nom: "forza horizon 5", img: "https://i.postimg.cc/0Q11d0Dh/image.png", twitch: "https://youtu.be/VPJUGylxsjQ?si=v6_BRemBiKaXKQ6S" },
    { nom: "gta rp", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/gta-v-ainda-ta-valendo-a-pena-em-2023-v0-j4euzkb504rb1_p7u1f3", twitch: "https://twitchtracker.com/femimarss/games/32982" },
    { nom: "Hello Neighbor", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/425a042fbdad6e329d578ca763bcda81_ad56pu", twitch: "https://twitchtracker.com/femimarss/games/493618" },
    { nom: "hunts man", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_capsule_2x_tvuehb", twitch: "https://twitchtracker.com/femimarss/streams/321008527612" },
    { nom: "inazuma eleven: victory road", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/co9nsw_p7y0a6", twitch: "https://youtube.com/playlist?list=PLmGhvPN6RD4WEl88xH5RsbCq8PG9gjxJM&si=HAwkOpYEpQ9XgJMX" },
    { nom: "Job Simulator: The 2050 Archives", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/c12eadd7fc1fb5af7f1d3209e0bddda0_ljqgcg", twitch: "https://twitchtracker.com/femimarss/games/492118" },
    { nom: "Kukoro: Stream Chat Games", img: "https://i.postimg.cc/Nf4Lz50D/image.png", twitch: "https://twitchtracker.com/femimarss/games/518764" },
    { nom: "little nightmare III", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/little-nightmares-2048x2048-23014_qy4dqj", twitch: "https://youtu.be/7WcpDSzvvic?si=9Kkyir1sUyv4PzCh" },
    { nom: "marbles on stream", img: "https://i.postimg.cc/FzFXdsQ4/image.png", twitch: "https://twitchtracker.com/femimarss/games/509511" },
    { nom: "mario kart world", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/mario-kart-world-jaquette_hmwlps", twitch: "https://youtu.be/k4OedRRtZVo?si=b_6F-rnEbi5p8S4x" },
    { nom: "mimesis", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_capsule_2x_bcb0qu", twitch: "https://youtu.be/xtxxJO9KFRQ?si=yjOAMi3ec0-gsIlB" },
    { nom: "minecraft rp: obscuria", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/hq720_bvsgax", twitch: "https://youtube.com/playlist?list=PLmGhvPN6RD4X_OUqXQ9qTQIMUEWfJ0y9v&si=v7mFh1e9EHM10H2C" },
    { nom: "Monster Hunter Wilds", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/606715151cea04f322521f5c0d7d745b_e1ixi7", twitch: "https://www.youtube.com/watch?v=O5QISqJCii0&list=PLZDvlSwiTr9_LucGzImh0Op4RqwBOhWFd" },
    { nom: "Nintendo Switch Sports", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/af3ef97806448fbb6466a7d715515f49_lkffnf", twitch: "https://twitchtracker.com/femimarss/games/2044170173" },
    { nom: "no, im not a human", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/no-im-not-a-human_fmbh.600_cxucy7", twitch: "https://youtu.be/PeJc-WWTQAY?si=UQE95CdEbcugMlXL" },
    { nom: "open front", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/01bdc60d66843a2224e61623cc622774_mlrrcj", twitch: "https://twitchtracker.com/femimarss/games/1896092709" },
    { nom: "peak", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/MV5BY2NkZTAxNTQtNDg0YS00ZDdhLTk4OTgtZWQyMzJmODJlYmVkXkEyXkFqcGc._V1_FMjpg_UX1000__zlf8kq", twitch: "https://twitchtracker.com/femimarss/streams/323618633209" },
    { nom: "Pokemon Legends: Z-A", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/pokemon-z-a-cover-art-1_uujeuz", twitch: "https://youtu.be/q7FZ7baPvIE?si=ZrSXcp7kwa4VgUhZ" },
    { nom: "Pushing It! Together: Sisyphus Co-Op", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/co9n5i_g4hnrc", twitch: "https://twitchtracker.com/femimarss/games/1592726071" },
    { nom: "r.e.p.o", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/il_fullxfull.6872768834_rws0_cc4sy7", twitch: "https://youtu.be/5-ILrjsicOU?si=prosRcFEAKvjHLWe" },
    { nom: "rematch", img: "https://i.postimg.cc/zBb0xsSn/image.png", twitch: "https://youtube.com/playlist?list=PLZDvlSwiTr99eVZWzjiUDZ-qzH0N3BE3j&si=bs5OczyjJawrKU-q" },
    { nom: "road 96", img: "https://i.postimg.cc/8crkPzd5/image.png", twitch: "https://youtu.be/WXGRzsggjkA?si=4CVUhNIjfdsG_O0m" },
    { nom: "Schedule I", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/19c2914ab0743574551529b6f3793eec_adi4gw", twitch: "https://twitchtracker.com/femimarss/games/1584836809" },
    { nom: "Schoolboy Runaway", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/co98mu_nfd7te", twitch: "https://www.youtube.com/watch?v=fGJEN3qoRYw" },
    { nom: "Slay the Princess", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/4da3de853e1b048988df01538f5b4df1_ur4duy", twitch: "https://www.youtube.com/watch?v=IT--G5JiX8I" },
    { nom: "Taxi Life: A City Driving Simulator", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/MV5BZTE4ZWE0ZjctZGI2Ny00MDk5LThjOWUtNDM5OTRmNTQzZWZkXkEyXkFqcGc._V1__fd1xxe", twitch: "https://youtu.be/5RFFDqGQeFc?si=pgKr0PTcSZYUqHEc" },
    { nom: "The First Berserker: Khazan", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/d5e31c20e5923909e77aa3b06600a931_nyqlmw", twitch: "https://www.youtube.com/watch?v=S-CSZriH8TU", statut: "drop" },
    { nom: "The Headliners", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/c7676190b4ae2251553c1c17efbaaa73_s88wa4", twitch: "https://twitchtracker.com/femimarss/games/1853781077" },
    { nom: "the Seven Deadly Sins: Origin", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/8355_ds9qe5", twitch: "https://twitchtracker.com/femimarss/streams/315037506146" },
    { nom: "The Thrill of the Fight", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/0d5b8d9935ac7eff4ebc2623ad695779_olr1qk", twitch: "https://twitchtracker.com/femimarss/games/737726051" },
    { nom: "Twelve Minutes", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/967693c3fdfa3d49a5a51a61d8f7ca4d_zkrpwu", twitch: "https://www.youtube.com/watch?v=iRCkXBQLpPo" },
    { nom: "UNDERTALE", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/aba1e5182d973f43f2b3fd755f8e2314_cja51z", twitch: "https://www.youtube.com/watch?v=aeXQPLC1ONs" }
];

const jeux2024 = [
    { nom: "A Difficult Game About Climbing", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/Screenshot_20260603_161613_X_eg1a0b", twitch: "https://twitchtracker.com/femimarss/games/856465807" },
    { nom: "A Way Out", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/65a2d52c28d7ff8617dfdc7aadf218ab_wp9cmt", twitch: "https://twitchtracker.com/femimarss/games/497388" },
    { nom: "amour sucré", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/cdf3cd70943bf115fbb1cf1d593c4a6a_kfgutd", twitch: "https://www.youtube.com/watch?v=VYcRW7SvWRQ" },
    { nom: "Backrooms: Escape Together", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/0685f656-9320-4fd8-ab17-477460b581e3_dwid4p", twitch: "https://twitchtracker.com/femimarss/games/1075600787" },
    { nom: "Backrooms rec.", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/0a2810d2240e621069ccaa0a3dd1f521_jy7tvf", twitch: "https://youtu.be/scKqOSUFId0?si=V2CkXeo6taYEZJhr" },
    { nom: "Bad Parenting", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/4d771eb07ea70bc00b04f6fb37a9bb71_uo8gmt", twitch: "https://www.youtube.com/watch?v=LS7orClEX4I"},
    { nom: "Black Myth: Wukong", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/12687a5768a65a2fe83c9bcab109f6e5_l2rye6", twitch: "https://www.youtube.com/watch?v=875fDtD0eF4&list=PLZDvlSwiTr98dLGIURIzDYf2PxrYC_iRO&index=9" },
    { nom: "CAPTURED", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/MV5BMTQ3ODY3NzQ1NF5BMl5BanBnXkFtZTgwOTIzNjczNzE._V1__o9r3ts", twitch: "https://www.youtube.com/watch?v=xw8_oCf0pAA" },
    { nom: "Celeste", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/87574b52f44fc6001c5477a09f81a662_nldytg", twitch: "https://youtu.be/NX4bDqLuZj0?si=cDUq5g5mgZDOjb6f&t=2533" },
    { nom: "Chuxie", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/co8n0d_x4iujf", twitch: "https://youtu.be/aiRCflKjbps?si=iDijcFoRcazeva36" },
    { nom: "Content Warning", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/3fa5696fecab21298fe5ab56ca22eb6c_fsl9gr", twitch: "https://www.youtube.com/watch?v=O8VMZddTwmc" },
    { nom: "Dale & Dawson Stationery Supplies", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/dale_dawson_stationery_supplies_pfjyk0", twitch: "https://www.youtube.com/watch?v=fKn9CMutDn0" },
    { nom: "Danganronpa: Trigger Happy Havoc", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/9cf4fdf447f1004e0acaec87451c8886_alxpfe", twitch: "https://www.youtube.com/watch?v=u6mlN8WpqhE&t=9117s"  , statut: "drop" },
    { nom: "Dark Hours", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/9a19f6b13e0011392a768acc73239827_kzcdfi", twitch: "https://www.youtube.com/watch?v=B04QLG8usiA" },
    { nom: "Doki Doki Literature Club!", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/81800faea76e4a4c7b5d18f920e39251_qd9g19", twitch: "https://www.youtube.com/watch?v=wCQ8jJA3TbQ&list=PLZqAuniKz966otvHU3EgVFMvcKXjaNo36" },
    { nom: "DOFUS", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/a53e8dd5f576060c551dfd84d83069be_ycalfp", twitch: "https://www.youtube.com/watch?v=peAQLxUevxE" },
    { nom: "Dollmare", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/Screenshot_20260603_172614_Google_ys8hgk", twitch: "https://www.youtube.com/watch?v=kJWTIH9Sx_M" },
    { nom: "DRAGON BALL: Sparking! ZERO", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/mL7392_1024x1024_glhfwb", twitch: "https://www.youtube.com/watch?v=cBpybGTgIAM&list=PLZDvlSwiTr9_YvYTjStzDZyUDlq8C77_c&index=6" },
    { nom: "EA Sports FC 25", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_600x900_2x_ktc3fo", twitch: "https://www.youtube.com/watch?v=8CBuhzaJeUw" },
    { nom: "Escape the Backrooms", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/FgVsiILuUfjL8B-big_wcetfe", twitch: "https://www.youtube.com/watch?v=pITeh-ZCHTQ&t=5s" },
    { nom: "Fears to Fathom: Ironbark Lookout", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/457ea98741d606b3b5396df730972e19_jyhsz5", twitch: "https://www.youtube.com/watch?v=E7u88iC7gs8" },
    { nom: "Fears to Fathom: Woodbury Getaway", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/fears_to_fathom_woodbury_getaway_fksdh2", twitch: "https://www.youtube.com/watch?v=UfytXamL5Mk" },
    { nom: "Finding Frankie", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/MV5BY2MwYjIyNGQtNmFhZS00ZWI4LTg4MmUtMjBlYjM1NTU4Yjc4XkEyXkFqcGc._V1_FMjpg_UX1000__gbgskv", twitch: "https://www.youtube.com/watch?v=BdtD5AfrZCc" },
    { nom: "Five Hearts Under One Roof", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/06d5ae033ad62612d9eb97f6bec7a708_jfgwl8", twitch: "https://www.youtube.com/watch?v=vqGU78naI5I&list=PLZDvlSwiTr9_hl0kBmbSwJiohHZgm1wGn&index=3" },
    { nom: "Five Nights at Freddy's 4", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/f17dc7f54276b8b4ae0fe9b3c6d41063_y2u3ks", twitch: "https://www.youtube.com/watch?v=jlM9QHWJPrc" },
    { nom: "Garten of Banban VI", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/e2608630d0b7431167be36b082eae813_ux6jnk", twitch: "https://youtu.be/4V5L-ybvfAQ?si=lKg-LHnm1NYEg44C" },
    { nom: "Gartic Phone", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/gartic_phone_qb76cv", twitch: "https://twitchtracker.com/femimarss/games/278888515" },
    { nom: "Joyville 2", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/cb1308d813cce89819dad09801972d61_omxan8", twitch: "https://twitchtracker.com/femimarss/games/133230364" },
    { nom: "Kebab Chefs!: Restaurant Simulator", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/c900476aa6c04751bf5eb57096db963f_pbju5s", twitch: "https://twitchtracker.com/femimarss/games/357223907" },
    { nom: "KinitoPET", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/MV5BODY0ZmVjMWEtN2VkMy00ODY4LThkNGYtYjhiM2NiZDA5YTM1XkEyXkFqcGc._V1_FMjpg_UX1000__eameeu", twitch: "https://www.youtube.com/watch?v=bSkThd7TJxo" },
    { nom: "Lunch Lady", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/Lunch_Lady_iof9qk", twitch: "https://twitchtracker.com/femimarss/games/477532253" },
    { nom: "league of legends", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/cf29ee336b07c0572c810f62f5543525_zt7opw", twitch: "https://youtu.be/NX4bDqLuZj0?si=eObX6olm7k7CB_WD&t=12629" },
    { nom: "Mario Kart 8 Deluxe", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/9cd6d894098e748716960bfcf9dbe115_epqwq5", twitch: "https://twitchtracker.com/femimarss/games/941530474" },
    { nom: "Mario Party Superstars", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/s-l1200_zzrdpf", twitch: "https://twitchtracker.com/femimarss/games/1068239917" },
    { nom: "MicroWorks", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/microworks_zd3apy", twitch: "https://youtu.be/NX4bDqLuZj0?si=Uzt68BlhlYH4Cu9A&t=8135" },
    { nom: "minecraft", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/0ed5055450adbd836945761a6fa43ee0_czbgey", twitch: "https://www.youtube.com/watch?v=5XiN9bypM0c" },
    { nom: "MiSide", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/09bce7a3bab0d71e3e2e66df9b13dac1_cqa1ka", twitch: "https://twitchtracker.com/femimarss/games/1196356222" },
    { nom: "Naruto x Boruto: Ultimate Ninja Storm Connections", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/f46a8c34bdb48e06a89fdccaea9ed072_ox20bq", twitch: "https://www.youtube.com/watch?v=p-CCJvC4jcg" },
    { nom: "Palworld", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/39c2dad1ac130d2789d4cb6055eb78e8_eeeuov", twitch: "https://www.youtube.com/watch?v=ACKEi_3hI6Q" },
    { nom: "Party Animals", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/2c988d909901eaa063825d711e9bbdcb_ja4jno", twitch: "https://www.youtube.com/watch?v=MmGzCSNb9Sw" },
    { nom: "PICO PARK", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/Screenshot_20260603_162037_X_vgles1", twitch: "https://twitchtracker.com/femimarss/games/513056" },
    { nom: "Pokemon Trading Card Game Pocket", img: "https://i.postimg.cc/x8sGYgP7/image.png", twitch: "https://youtu.be/65d1fLgY3Wo?si=0Of9gZvEmIHjoouv" },
    { nom: "Parasocial", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/f67e8d5d1185242f0bf5ff4a4e2f84cf_jutdr8", twitch: "https://twitchtracker.com/femimarss/games/143662140" },
    { nom: "roblox", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/4d3767318b2f7769ae8413ac4c145f57_c7ysyf", twitch: "https://youtu.be/XUoVeWZ9htQ?si=zmgdJvs5ejbd1Aed" },
    { nom: "Sea of Thieves", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/622f2ce74f071eb5f0f49ce89c3ab522_i0iqjb", twitch: "https://twitchtracker.com/femimarss/games/490377" },
    { nom: "SEKIRO: SHADOWS DIE TWICE", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/8c69991496789f76e26521e7e7a22d34_lsnn1n", twitch: "https://www.youtube.com/watch?v=7BUMeekKo1w" },
    { nom: "Silent Hill: The Short Message", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/d170577a29a3e073d8f7012857677ad1_k2m1ot", twitch: "https://www.youtube.com/watch?v=8zb2jFjDttg" },
    { nom: "Slopecrashers", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/slope_crashers_b7ocao", twitch: "https://youtu.be/NX4bDqLuZj0?si=M8IBx-bhdIwg9vc5&t=3927" },
    { nom: "Super Mario Party Jamboree", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/d8990f79de598c52139e95e819c86c8c_kbfkjf", twitch: "https://www.youtube.com/watch?v=d0VHvbr4GBU" },
    { nom: "Super Smash Bros. Ultimate", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/1d73fc8d9f230a5c26557cd36f57e2e5_fgfvxr", twitch: "https://www.youtube.com/watch?v=c_8BU57dcGY" },
    { nom: "The Cabin Factory", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/the_cabin_factory_fxye5x", twitch: "https://www.youtube.com/watch?v=klEChzzX-lY" },
    { nom: "The Casting of Frank Stone", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/9ddd23b3c8caf0dc71a2488ab6337efb_biw5x5", twitch: "https://www.youtube.com/watch?v=uybkvfiGluE" },
    { nom: "Trolley Problem, Inc.", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/trolley-problem-inc-pc-windows_mtah4u", twitch: "https://twitchtracker.com/femimarss/games/6948500" },
    { nom: "UFL", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/Screenshot_20260603_173257_Google_koq7hc", twitch: "https://twitchtracker.com/femimarss/games/1471416868" },
    { nom: "UNO", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/3eee248b5b8cce5566b039231d9a2422_vjh4hh", twitch: "https://twitchtracker.com/femimarss/games/11103" },
    { nom: "VALORANT", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/79aaf76e647b1eac1329b41a661ab60d_gbirqs", twitch: "https://www.youtube.com/watch?v=F34KTPe6mnI" },
    { nom: "Voice Mimicry Show", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/2x1_NSwitchDS_VoiceMimicryShow_image1600w_eqzisg", twitch: "https://www.youtube.com/watch?v=Zfl67AsGkuc" },
    { nom: "Who's Your Daddy", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/MV5BZDUyNjE3NjMtZWQzMy00ZjRhLWIyOWMtMTQzZTEzMGE1ZjRhXkEyXkFqcGc._V1__gu8nhb", twitch: "https://twitchtracker.com/femimarss/games/491169" },
    { nom: "Wreckfest", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/0f2bb3f5d7af1b53384b3a495294374c_lbevcj", twitch: "https://youtu.be/NX4bDqLuZj0?si=lUSYLCJo4Lfh0MHa&t=5588" }
];
const jeux2023 = [
    { nom: "9 Childs Street", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/58b70e9b323b01c81c0684730b7b5a77_dankg2", twitch: "https://www.youtube.com/watch?v=-rvrFYfeIFI" },
    { nom: "Amanda the Adventurer", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/41ce08ebcf6a8dffc9b0198174d3252a_ipmz7g", twitch: "https://www.youtube.com/watch?v=0zmqpDP206A" },
    { nom: "Contraband Police", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/b668796f3f771b2e6cd7fecd7efcfaf6_rvisza", twitch: "https://www.youtube.com/watch?v=JPVg9IjEIHU" },
    { nom: "cotonou rp", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/0ed5055450adbd836945761a6fa43ee0_czbgey", twitch: "https://www.youtube.com/watch?v=Erwti3N25ds&list=PLmGhvPN6RD4V3-gVuunleTWSqiJlWxkMq" },
    { nom: "Choo-Choo Charles", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/7784a3c0727b11746705b9babcaf8766_kligdj", twitch: "https://www.youtube.com/watch?v=3noj40akWiY" },
    { nom: "Cuphead", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/25dcf1554f13c36b512dfe907acc77d3_dlc9cj", twitch: "https://www.youtube.com/watch?v=1TM0oEwNbek" },
    { nom: "EA Sports FC 24", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/6c3ba27a135790229d9239d4f93a89d7_ibey6f", twitch: "https://youtu.be/IEABJOtt_zk?si=fTOqnT6ATszM6fpZ" },
    { nom: "FIFA 23", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/51aa0970c09f34740671a6c41f92df51_dfzhbz", twitch: "https://twitchtracker.com/femimarss/games/1745202732" },
    { nom: "FNaF 1", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/9a9d53c38badba2284af0da4ef86b358_prknpu", twitch: "https://twitchtracker.com/femimarss/games/418063" },
    { nom: "Fortnite", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/7ee8c4361736ed806711ae99f7d6762c_nntrz9", twitch: "https://www.youtube.com/watch?v=q0xYcGnKcaU" },
    { nom: "F.E.A.R. Files", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/5e577a40656885344fa5fc73cdbb6841_fsqfud", twitch: "https://twitchtracker.com/femimarss/games/3634" },
    { nom: "Garten of Banban IV", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/4af72e2c583082b4c85d0b85671479ae_pir4lo", twitch: "https://twitchtracker.com/femimarss/games/1584362682" },
    { nom: "Geometry Dash", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/722eaf15b47c6ce753f1482b352f5c48_af7psn", twitch: "https://twitchtracker.com/femimarss/games/460951" },
    { nom: "Gnome", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_600x900_2x_mfs1d2", twitch: "https://twitchtracker.com/femimarss/games/598008147" },
    { nom: "God of War", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/8ee2a98349171b92620090038a1061c6_evndcy", twitch: "https://www.youtube.com/watch?v=46y3oQd8EkU" },
    { nom: "God of War Ragnarök", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/fd93fd1de50e084dd7d3b0b9f6950450_jb81u2", twitch: "https://www.youtube.com/watch?v=3n1G7HylVjs", statut: "drop" },
    { nom: "LABYRINTHINE", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/d6b0c53f82aa4389fb2f94d81eb753cf_rvyz0q", twitch: "https://www.youtube.com/watch?v=niB7QxZXkY4" },
    { nom: "lethal company", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/3716f4fee7a631796f256ea172f79a68_zvhlag", twitch: "https://www.youtube.com/watch?v=-omww7fUZks" },
    { nom: "Lycans", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_600x900_2x_jp4txf", twitch: "https://www.youtube.com/watch?v=REc8krGmVyc" },
    { nom: "MAD WAY", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_600x900_2x_q1arbt", twitch: "https://twitchtracker.com/femimarss/games/27264154" },
    { nom: "Marvel's SpiderMan Remastered", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/87d8e1bb73566a11ed0c618f5510aff2_xjvjqo", twitch: "https://twitchtracker.com/femimarss/games/1262047844" },
    { nom: "Marvel's SpiderMan: Miles Morales", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/4e4032bbad41a71531fcde01411c82d1_vhkt9d", twitch: "https://twitchtracker.com/femimarss/games/518007" },
    { nom: "Marvel's SpiderMan 2", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/4b94d5168bb2ab4311076369169cc441_tb97fn", twitch: "https://twitchtracker.com/femimarss/games/1967084783", statut: "drop" },
    { nom: "Pokemon Ruby", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/4f24337eea45f3f9408400215512ed74_g6t0ip", twitch: "https://twitchtracker.com/femimarss/games/9287" },
    { nom: "Pokemon Scarlet/Violet", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/181426fbde5526374ea654b59c16577e_b0n4av", twitch: "https://twitchtracker.com/femimarss/games/670867987" },
    { nom: "Only Up!", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_600x900_2x_wdckbi", twitch: "https://www.youtube.com/watch?v=22KKevAP-YQ" },
    { nom: "Only Up 2", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_600x900_2x_d8pvc9", twitch: "https://www.youtube.com/watch?v=tmlwJco95fY" },
    { nom: "Only Climb: Better Together", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_600x900_2x_p7wdsu", twitch: "https://twitchtracker.com/femimarss/games/1976909017" },
    { nom: "Rocket League", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/5fe5b01f95f050c99c170481f6dc88fb_vynuah", twitch: "https://twitchtracker.com/femimarss/games/30921" },
    { nom: "Suika Game", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/f68a2bf3e35f63a3a02b8cf3a0e5201a_iynnlp", twitch: "https://twitchtracker.com/femimarss/games/1702559244" },
    { nom: "The Dark Pictures Anthology: The Devil in Me", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/499160e2767b11465c385e6c4ef56520_iqw3d7", twitch: "https://www.youtube.com/watch?v=0VdnhqYnBKQ" },
    { nom: "The Joy of Creation", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/f73ec471aadd87d3d0748717c9ce8ce9_ntnizr", twitch: "https://www.youtube.com/watch?v=ier5VKaBvJ4" },
    { nom: "The Devourer: Hunted Souls", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_600x900_2x_jlkssc", twitch: "https://www.youtube.com/watch?v=shFjpYcslL8" },
    { nom: "The Forest", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/89e2d0461b5dd981ef0783d27fea0de9_pd6ljs", twitch: "https://www.youtube.com/watch?v=tRlONZ7BoIU" },
    { nom: "The Legend of Zelda: Tears of the Kingdom", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_800,f_auto,q_auto/ae758fbcbd5bd841516c53b3c08ebc6f_blu1d1", twitch: "https://www.youtube.com/watch?v=UymjgnR5rwY", statut: "drop" }
];

const jeux2022 = [
    { nom: "ALTF4", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/6780d42a1e0eb22a931cf12c84689434_tkfwgb", twitch: "https://twitchtracker.com/femimarss/games/791968461" },
    { nom: "Animal Crossing: New Horizons", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/078d2a1275f0d53cda67d165440aeb50_dsmio2", twitch: "https://twitchtracker.com/femimarss/games/509538" },
    { nom: "Apex Legends", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/0d7a3aef18b1eb97e70a5148e2a2646f_bhsnv0", twitch: "https://twitchtracker.com/femimarss/games/511224" },
    { nom: "As Dusk Falls", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/94bcf406db8c8f262263d1d4ad11fa1b_la0cz4", twitch: "https://twitchtracker.com/femimarss/games/518875" },
    { nom: "Call of Duty: Modern Warfare II", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/5cef43602bc7486da26ba5fbf4483f43_vidge9", twitch: "https://www.youtube.com/watch?v=nY8QqQl5cag" },
    { nom: "Crab Game", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/3dd2b1e105c4da7735384dfca5522500_tg9dpz", twitch: "https://twitchtracker.com/femimarss/games/673760473" },
    { nom: "Demon Slayer The Hinokami Chronicles", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/dd032c04c7297506a49bf4ad2fa0dce9_ar1ask", twitch: "https://www.youtube.com/watch?v=0PLXa95lhL0" },
    { nom: "elden ring", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/557fa68027943a8b0d3b66c4e72ff23b_olplmy", twitch: "https://youtube.com/playlist?list=PLmGhvPN6RD4Ua3K3Oq2fQKcOdk9gCsKmv&si=Lb9eEWBAGNWUwxWw" },
    { nom: "FIFA 22", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/0c6b61e4af7d21d8ea380378ebacf897_pcwwst", twitch: "https://twitchtracker.com/femimarss/games/1869092879" },
    { nom: "Fnaf 2", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/c4ad72391c45de1c5ffd124705a5fc74_bpc0dl", twitch: "https://twitchtracker.com/femimarss/games/488559" },
    { nom: "From the Darkness", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/e6977be4a31347abde1014463043f956_jyb8hn", twitch: "https://twitchtracker.com/femimarss/games/220074709" },
    { nom: "Garten of Banban", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/96cc1b58ad1f952e7a859391538a0ed0_yo8z4y", twitch: "https://youtu.be/wmdzotFniWs?si=cDYPI5HY4Qrjavnl" },
    { nom: "Garten of Banban II", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/8988e4a1d1c16c7a4890b03cc29a54ae_ojieo8", twitch: "https://youtu.be/-26a173m6mA?si=QxUb7zWb2aQ7xBOw" },
    { nom: "Garten of Banban III", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/dd012dbe897e3f8d52df1da9882525d9_rj0jgn", twitch: "https://youtu.be/jNL3bzWGJ54?si=r7wMqq8Tn-b3gOkW" },
    { nom: "Getting Over It ", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/797a1e5473c21f6ded58930097451edf_vamyd8", twitch: "https://www.youtube.com/watch?v=MwIvh_yaXS8" },
    { nom: "Goat Simulator", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/5744da8d0fee8ead11530f4ac328114e_u3taac", twitch: "https://twitchtracker.com/femimarss/games/417697" },
    { nom: "Golf Gang", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/9afeb5a03232c6a078838f3c0974182a_xjiaaa", twitch: "https://twitchtracker.com/femimarss/games/160556003" },
    { nom: "Hogwarts Legacy", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/43db2b7df1cff247f7efaa0e7e8d7e3c_htzndy", twitch: "https://twitchtracker.com/femimarss/games/1095275650" },
    { nom: "Hot Wheels Unleashed", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/03f36d826d077c1d2e2e37fc85b8831f_awhc81", twitch: "https://twitchtracker.com/femimarss/games/1716516651" },
    { nom: "Inside the Backrooms", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/82932165ca3c2acfab258f575cf4c5c0_ymx83i", twitch: "https://www.youtube.com/watch?v=me_ZhB5Kma0" },
    { nom: "Little Nightmares", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/fbd783562a259f87d30f4a04df773221_tcjtbb", twitch: "https://twitchtracker.com/femimarss/games/494131" },
    { nom: "Little Nightmares II", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/b7a3645101840e4a322d2eaa3a75c613_zbokl7", twitch: "https://twitchtracker.com/femimarss/games/513949" },
    { nom: "MADiSON", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/a95e8a95c76dcd9960631927359f40dd_pyiptb", twitch: "https://twitchtracker.com/femimarss/games/1535635666" },
    { nom: "Mario Kart 8", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/08685bf36516348b810ede4e3c1dfe52_dx6fel", twitch: "https://twitchtracker.com/femimarss/games/369588" },
    { nom: "Mario Strikers: Battle League", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/ae6650337c7b09afca733f7eb88bbdb3_i34mvs", twitch: "https://twitchtracker.com/femimarss/games/1769394593" },
    { nom: "Microsoft Flight Simulator", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/7b0ff7682796d0b90b1dd565c942dda1_jj1hyd", twitch: "https://twitchtracker.com/femimarss/games/7193" },
    { nom: "MultiVersus", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/ec56b5877fd47ac40f567279d4b442c9_otheyn", twitch: "https://twitchtracker.com/femimarss/games/950189725" },
    { nom: "Naruto Shippuden: Ultimate Ninja Storm 4", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/f544d901e6927518ab5e1c1e5ecdffa4_gijdmx", twitch: "https://twitchtracker.com/femimarss/games/488635" },
    { nom: "OVERKILL's The Walking Dead", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/c3a7eb7c994a6475994948502df99fe4_ur4fhn", twitch: "https://twitchtracker.com/femimarss/games/509389" },
    { nom: "Overwatch", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/f8b146b1264be1257e65f518de82a372_wx951d", twitch: "https://twitchtracker.com/femimarss/games/515025" },
    { nom: "Peepo Island", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_600x900_2x_sk9fxm", twitch: "https://twitchtracker.com/femimarss/games/22643600" },
    { nom: "Pokemon Legends: Arceus", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/ce098cf158927e2cea10919e1e2b36a3_n2hepg", twitch: "https://twitchtracker.com/femimarss/games/561013832" },
    { nom: "Pokemon perle étincellant", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/c407d9c89231a07642371a57e350d6c4_sgt5bw", twitch: "https://twitchtracker.com/femimarss/games/1584745140" },
    { nom: "Pokemon rouge feu", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/efe2c0e92e3a5755acf5296b5983d87e_x1gliy", twitch: "https://www.youtube.com/watch?v=igqsCmmgzrk" },
    { nom: "Pro Soccer Online", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/library_600x900_2x_jby6bs", twitch: "https://twitchtracker.com/femimarss/games/1286420756" },
    { nom: "Riders Republic", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/7cdbf5770f3c502e662a1465639d0c61_r8b9pg", twitch: "https://twitchtracker.com/femimarss/games/633127529" },
    { nom: "Summer of '58", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/449b1890e6fc69aeab7cbcc2de2f8298_nuvs7i", twitch: "https://twitchtracker.com/femimarss/games/2080474707" },
    { nom: "Super Mario 3D World", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/39eaa84fa49b129edaa137171ba60746_ihuvie", twitch: "https://twitchtracker.com/femimarss/games/369590" },
    { nom: "Super Mario 3D World + Bowser's Fury", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/f1d8611660634e51a3fdc10f9cb1667b_n7evxq", twitch: "https://twitchtracker.com/femimarss/games/1446426412" },
    { nom: "Temtem", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/2648dd6068cc394baa9d86a02ef3b877_dhdaxm", twitch: "https://twitchtracker.com/femimarss/games/510336" },
    { nom: "The Baby In Yellow", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/165d979bf8f90339555afb6e9c4ae1f0_sso1yh", twitch: "https://twitchtracker.com/femimarss/games/1091040450" },
    { nom: "The Callisto Protocol", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/e2dbb0b1c2c35fce380831d90d6f50a0_y0pgl7", twitch: "https://twitchtracker.com/femimarss/games/838226069" },
    { nom: "The Dark Pictures Anthology: House of Ashes", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/3e539f563f356b53ab06ee253ba6d4af_w8hatc", twitch: "https://twitchtracker.com/femimarss/games/1274531553" },
    { nom: "The Dark Pictures Anthology: Little Hope", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/34314e5f3c3fd30ed5a4593a7fe3c4c0_qgfmcy", twitch: "https://twitchtracker.com/femimarss/games/514207" },
    { nom: "The Mortuary Assistant", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/797a6345a0aff1dc393ba83864bebfeb_naqmjx", twitch: "https://twitchtracker.com/femimarss/games/1945673289" },
    { nom: "The Quarry", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/8551d9b264ce1a7e3917db0307757186_rv35ve", twitch: "https://twitchtracker.com/femimarss/games/1937599489" },
    { nom: "The Walking Dead", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/2c7b18e387e5d3a2dbbae05fc7e740ef_cnhwz7", twitch: "https://twitchtracker.com/femimarss/games/30740" },
    { nom: "Total War: WARHAMMER III", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/f0ef376bcffed379553591385cf4dc21_wme5bb", twitch: "https://twitchtracker.com/femimarss/games/1913410799" },
    { nom: "Trackmania", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/fb034ed2559309ddbc9aa31ccc440ff6_ie4cmd", twitch: "https://twitchtracker.com/femimarss/games/687129551" },
    { nom: "You Suck at Parking", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/ce45e5a9648f204dbc38dc83e1ab82c7_xm4n8l", twitch: "https://twitchtracker.com/femimarss/games/519604" }
];

const jeux2021 = [
    { nom: "Alien: Isolation", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/274e068f01182cc5e4b5e44c263989ff_mqy77n", twitch: "https://twitchtracker.com/femimarss/games/458443" },
    { nom: "Among Us", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/42acab51cf2973d1b174ec59f11c9795_envqss", twitch: "https://twitchtracker.com/femimarss/games/510218" },
    { nom: "ARK: Survival Evolved", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_ht69i1", twitch: "https://twitchtracker.com/femimarss/games/489635" },
    { nom: "BIOMUTANT", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_ewhame", twitch: "https://twitchtracker.com/femimarss/games/498483" },
    { nom: "Call of Duty: Infinite Warfare", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_nyhmc5", twitch: "https://twitchtracker.com/femimarss/games/491437" },
    { nom: "Call of Duty: Modern Warfare", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_h3qinp", twitch: "https://twitchtracker.com/femimarss/games/1614555304" },
    { nom: "Call of Duty: Warzone", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/da64a736b47e9b601309a3a86f013db0_waa3al", twitch: "https://twitchtracker.com/femimarss/games/512710" },
    { nom: "Counter-Strike", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/9e63bf4c221fde71b7a71661cc5816e1_bmvcm4", twitch: "https://twitchtracker.com/femimarss/games/32399" },
    { nom: "DARK SOULS III", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_zercz1", twitch: "https://twitchtracker.com/femimarss/games/490292" },
    { nom: "DEVOUR", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_agflw2", twitch: "https://twitchtracker.com/femimarss/games/836519689" },
    { nom: "Evil Inside", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/90112_Evil_Inside_f0iqpi", twitch: "https://twitchtracker.com/femimarss/games/2067979355" },
    { nom: "fall guys", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_dbot9z", twitch: "https://twitchtracker.com/femimarss/games/512980" },
    { nom: "FIFA 21", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_saju4d", twitch: "https://twitchtracker.com/femimarss/games/518204" },
    { nom: "Find Yourself", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/89455_Find_Yourself_imgzuz", twitch: "https://twitchtracker.com/femimarss/games/1724063925" },
    { nom: "Fnaf: Security Breach", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/b16c272203bdc8a4d2f86c97753ed62c_zcyvxo", twitch: "https://twitchtracker.com/femimarss/games/2143096682" },
    { nom: "Half-Life: Alyx", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_hcrsjk", twitch: "https://twitchtracker.com/femimarss/games/515195" },
    { nom: "HELLSEED", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/88790_Hellseed_oeivwp", twitch: "https://twitchtracker.com/femimarss/games/1650671675" },
    { nom: "It Takes Two", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_ctompi", twitch: "https://twitchtracker.com/femimarss/games/518213" },
    { nom: "Knockout City", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_l5pf8q", twitch: "https://twitchtracker.com/femimarss/games/1924769596" },
    { nom: "Layers of Fear", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_lxy0gl", twitch: "https://twitchtracker.com/femimarss/games/490537" },
    { nom: "Locked Up", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_axngtz", twitch: "https://twitchtracker.com/femimarss/games/518381" },
    { nom: "minecraft", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/0ed5055450adbd836945761a6fa43ee0_czbgey", twitch: "https://twitchtracker.com/femimarss/streams/41182857260" },
    { nom: "Monster Hunter Rise", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_ehly3o", twitch: "https://twitchtracker.com/femimarss/games/1275666892" },
    { nom: "Naruto Shippuden: Ultimate Ninja Storm 2", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_lozc0n", twitch: "https://twitchtracker.com/femimarss/games/27534" },
    { nom: "Naruto Shippuden: Ultimate Ninja Storm 3", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_b2hc2a", twitch: "https://twitchtracker.com/femimarss/games/66174" },
    { nom: "Naruto: Ultimate Ninja Storm", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_rhudq9", twitch: "https://twitchtracker.com/femimarss/games/19087" },
    { nom: "Outlast", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_mfnthn", twitch: "https://twitchtracker.com/femimarss/games/73586" },
    { nom: "Outlast II", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/3093acfee520c8018322ebf11f80ee22_pmluv5", twitch: "https://twitchtracker.com/femimarss/games/510117" },
    { nom: "Pacify", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/67433c674cf4498462e7f90e606f5c26_fxjcjw", twitch: "https://twitchtracker.com/femimarss/games/511134" },
    { nom: "Ratchet & Clank: Rift Apart", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_gprxni", twitch: "https://twitchtracker.com/femimarss/games/518016" },
    { nom: "RESIDENT EVIL 7 biohazard", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_ziuznb", twitch: "https://twitchtracker.com/femimarss/games/492934" },
    { nom: "Resident Evil Village", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_ie42n0", twitch: "https://twitchtracker.com/femimarss/games/518017" },
    { nom: "Roller Champions", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_gk0gb5", twitch: "https://twitchtracker.com/femimarss/games/512991" },
    { nom: "Suite 776", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_fpcrls", twitch: "https://twitchtracker.com/femimarss/games/515526" },
    { nom: "Super Mario Odyssey", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/025db44c7bed5aad0be250dd67f1321b_n2u0fj", twitch: "https://twitchtracker.com/femimarss/games/493997" },
    { nom: "The Last of Us Part II", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_gmwnmx", twitch: "https://twitchtracker.com/femimarss/games/494552" },
    { nom: "The Legend of Zelda: Breath of the Wild", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/121b81f7d167ca2c24fdab4f044048f8_y6pkgy", twitch: "https://twitchtracker.com/femimarss/games/110758" },
    { nom: "Uncharted 2: Among Thieves", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/4b69dd118df52dfcab92bc0e9a7a2607_mahykw", twitch: "https://twitchtracker.com/femimarss/games/20357" },
    { nom: "Uncharted 3: Drake's Deception", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_iz9ag3", twitch: "https://twitchtracker.com/femimarss/games/29683" },
    { nom: "Uncharted 4: A Thief's End", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/0d76ee42cf6c64f82c316f47cb735ef2_vmqsmt", twitch: "https://twitchtracker.com/femimarss/games/458641" },
    { nom: "Uncharted: Drake's Fortune", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_om0rw7", twitch: "https://twitchtracker.com/femimarss/games/12845" },
    { nom: "Visage", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_w50olg", twitch: "https://twitchtracker.com/femimarss/games/494082" },
    { nom: "We Were Here Together", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_qwi3fi", twitch: "https://twitchtracker.com/femimarss/games/509862" }
];

const jeux2020 = [
    { nom: "Call of Duty: Black Ops Cold War", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_up4euo", twitch: "https://twitchtracker.com/femimarss/games/512709" },
    { nom: "Cyberpunk 2077", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/4030e2eebb977639f8836aa25a293e40_luuhhn", twitch: "https://twitchtracker.com/femimarss/games/65876" },
    { nom: "Phasmophobia", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/image_ulds9f", twitch: "https://twitchtracker.com/femimarss/games/518184" }
];


const animesList = [
    { nom: "arcane", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/6FMWx79iAtZx8WHtOrRj0VlM8Tp_sx0ybw", twitch: "https://www.patreon.com/collection/1229300", statut: "termine" },
    { nom: "assassination classroom", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/qf0l0nQ2t06Es3cSXflqx6l6vsJ_ygbhgd", twitch: "https://www.patreon.com/collection/2172684?view=expanded", statut: "termine" },
    { nom: "black clover", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/jbrMpErsaPrzKjf96zpE452Un1o_bryu39", twitch: "https://www.patreon.com/collection/857635?view=expanded", statut: "termine" },
    { nom: "bleach", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/7bSQNQuhHeInFMfzMwevfCiqcTm_l2d2pn", twitch: "https://www.patreon.com/collection/857634", statut: "termine" },
    { nom: "Bleach: Thousand-Year Blood War", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/zbwbIldXg0SjgO80gSZ0mi92jja_ooxgfd", twitch: "https://www.patreon.com/collection/857634", statut: "termine" },
    { nom: "blue lock", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/i9kVgMqRocRUCOi4VX8v4ieQk2Z_et2qk7", twitch: "https://www.patreon.com/collection/1322813", statut: "termine" },
    { nom: "Boruto : Naruto Next Generations", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/5In9hxnBHv6klZKpZhmAJwSpwYI_mk6wuz", twitch: "https://www.patreon.com/collection/857630?view=expanded", statut: "termine" },
    { nom: "chainsaw man", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/npdB6eFzizki0WaZ1OvKcJrWe97_qilocf", twitch: "https://www.patreon.com/collection/1819982", statut: "termine" },
    { nom: "cyberpunk edgerunners", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/iuF7AjWC1KNuSV7A8UaH3T2W2H9_ahmhy9", twitch: "https://www.patreon.com/cw/femimars/posts?filters%5Btag%5D=cyberpunk", statut: "termine" },
    { nom: "death note", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/chnG4pYo89weaBjXHJWvW68E35B_te1iap", twitch: "https://www.patreon.com/collection/857661", statut: "termine" },
    { nom: "demon slayer", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/taT33NroOl2Fn8bUGj8bwdmNw3G_xj7uu2", twitch: "https://www.patreon.com/collection/1828584", statut: "termine" },
    { nom: "digital circus", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/lpfrgfomX8uNFxv4VaEzvJGs9TK_wfbiqh", twitch: "https://youtube.com/playlist?list=PLYopthT7CLz1QFxEzt7kT0D9js9xtzIe_&si=_clw2LzDZmVmW5dR", statut: "termine" },
    { nom: "erased", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/EljUwZJhpuYfVuSfqY8Pt1xxpH_rjwjxm", twitch: "https://www.patreon.com/cw/femimars/posts?filters%5Btag%5D=erased", statut: "termine" },
    { nom: "fairy tail", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/703mVJP8UyP1b1hEJi6aTrf0MQ1_eecxak", twitch: "https://www.patreon.com/collection/857632", statut: "termine" },
    { nom: "fmab", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/5ZFUEOULaVml7pQuXxhpR2SmVUw_nt8ort", twitch: "", statut: "termine" },
    { nom: "fruits basket", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/9TGNcvMm91QXmnnCCYYqnYK0bK7_cal6tg", twitch: "https://www.patreon.com/collection/857645?view=expanded", statut: "termine" },
    { nom: "gto", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/XuzGgy1FoCKFw2USYYrGhv00np_bwxkgb", twitch: "", statut: "termine" },
    { nom: "haikyu !!", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/a5RwHosM571yag25YNU9NP7i08F_n7tzwt", twitch: "https://www.patreon.com/collection/857643?view=expanded", statut: "termine" },
    { nom: "hunter x hunter", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/download_si4pgq", twitch: "https://www.patreon.com/collection/857641", statut: "termine" },
    { nom: "inazuma eleven", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/wGLKyYQfb06AU9vQbdRhBDAgn6t_k02lf8", twitch: "https://www.patreon.com/collection/857642?view=expanded", statut: "termine" },
    { nom: "JoJo's Bizarre Adventure", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/ogAWwbh3frWtiTyyXrZaVFtqCgp_y77ovz", twitch: "https://youtube.com/playlist?list=PLYopthT7CLz2UID8kVAvCBGfNRpabknA2&si=pr3SebiOjzb6u_Us", statut: "encours" },
    { nom: "jujutsu kaisen", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/6qQzMJG27XOJsyAEEIisoJB45j2_sxvjoh", twitch: "https://www.patreon.com/collection/857623?view=expanded", statut: "termine" },
    { nom: "jujutsu kaisen: saison 2", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/3yFHMtdhriig4sm1w8oMQfA2gFN_mwrq46", twitch: "https://www.patreon.com/collection/857623?view=expanded", statut: "termine" },
    { nom: "Kaguya-sama: Love is War", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/k02Ph3KbuOVW3eYcfIyX9RhkLZe_m2eau7", twitch: "https://www.patreon.com/collection/857652?view=expanded", statut: "termine" },
    { nom: "kuroko no basket", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/rPg2SkcjeUJqECLDbhqAhUhSr8p_skgro5", twitch: "https://www.patreon.com/collection/857656?view=expanded", statut: "termine" },
    { nom: "my hero academia", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/xL1AwLxTHtdttdZ03R2Au3p8Dp7_kuqrn3", twitch: "https://www.patreon.com/collection/1859121?view=expanded", statut: "termine" },
    { nom: "naruto", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/piCt3IjXvoKaIwycJbOlE5TeEkA_fj7qrd", twitch: "https://www.patreon.com/collection/857629?view=expanded", statut: "termine" },
    { nom: "naruto shippuden", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/71mASgFgSiPl9QUexVH8BubU0lD_bxj4xu", twitch: "https://www.patreon.com/collection/857628", statut: "termine" },
    { nom: "ONE PIECE", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/dB4EDhre2dsC2kxYDavyKWqLQwi_bpd3we", twitch: "https://www.youtube.com/watch?v=dWJpN5pEyHE&list=PLYopthT7CLz2NkzSZd0vgtLTBuZlw4_Hr", statut: "encours" },
    { nom: "one punch man s1", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/cRtWgIgfY9BgfWcIODOC9uN7Dzc_de6ps6", twitch: "", statut: "termine" },
    { nom: "parasyte", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/2ngHwPQhHGPpLkLQd2MTAI3iXPq_emdxkz", twitch: "https://www.patreon.com/collection/857660?view=expanded", statut: "termine" },
    { nom: "rankings of kings", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/pU3PK0yG5cMWNwvkJcEljDndGrd_ef9dv2", twitch: "https://www.patreon.com/collection/1203292", statut: "drop" },
    { nom: "shingeki no kyojin", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/lylYNfk1BGgKKO5esGBisQvHWGi_xia04j", twitch: "https://www.patreon.com/collection/857658?view=expanded", statut: "termine" },
    { nom: "solo leveling", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/geCRueV3ElhRTr0xtJuEWJt6dJ1_umhzot", twitch: "https://www.patreon.com/collection/1411820", statut: "termine" },
    { nom: "sword art online", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/9m8bFIXPg26taNrFSXGwEORVACD_npcr9m", twitch: "", statut: "drop" },
    { nom: "the promised neverland", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/2gqhjggR5GCyWqsOytp9Omxz1fa_ghxhrb", twitch: "", statut: "termine" },
    { nom: "the seven dealdy sins", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/gxTojpKEOtue85EEFlozwRbDXwJ_fu2lzt", twitch: "https://www.patreon.com/collection/857640?view=expanded", statut: "termine" },
    { nom: "to be hero x", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/7ynNG9lYS9HIR8cYMgawO19VPkg_waftzr", twitch: "https://www.patreon.com/collection/1727648", statut: "termine" },
    { nom: "tokyo ghoul", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/tokyo-ghoul-gigapixel-art-width-2480px_ovccox", twitch: "https://www.patreon.com/collection/1787692", statut: "termine" },
    { nom: "tokyo ghoul: re", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/MV5BNmJkZjUyYjItNjM1MC00YTU1LTgwNjMtMDA4YjdlYzc4MWQzXkEyXkFqcGc._V1_FMjpg_UX1000__s7xwxa", twitch: "https://www.patreon.com/collection/1787692", statut: "drop" },
    { nom: "tokyo revengers", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/kvsFvhZ9DPKm0KV7TY9nOeXYsWC_qzhdzh", twitch: "", statut: "termine" },
    { nom: "vinland saga", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/vUHlpA5c1NXkds59reY3HMb4Abs_fdv5ix", twitch: "https://www.patreon.com/collection/857649?view=expanded", statut: "termine" },
    { nom: "wakfu", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/87SwFiUG4DG2obsAsSkFxLH4M2V_zdjcbg", twitch: "https://www.patreon.com/collection/857657?view=expanded", statut: "termine" },
    { nom: "zom 100", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/q7QS8lAF1x3CxRSXoraOCdedXUc_gi4xvy", twitch: "https://www.patreon.com/collection/1546829", statut: "termine" }
];


const filmList = [
    { nom: "amazing spiderman", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/20158079_mykvk3", twitch: " https://www.patreon.com/posts/amazing-1-88049819?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "amazing spiderman 2", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/qSiJMJSa8s4dWdQVgEkiZzRJyCR_dmz2te", twitch: " https://www.patreon.com/posts/amazing-2-feat-88136291?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "CASE DEPART", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/1e61bf4b970afb89f4a57d69f0987fca1fe731332d2532b9592bfa05fa51ea20_igkrfp", twitch: "https://www.patreon.com/posts/case-depart-x-du-102859340?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "creed", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/Uv---zpvWpFlK8p2DH2wHWLiUj6-yRzBLX7pI8c_pKIu--LqQOuou50v-H7HF-n4FgQ__vjc7q8", twitch: "https://www.patreon.com/posts/creed-1-138446525?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "creed II", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/f740e1031324804b4b7dc5823c3a11d1934fb8a77c168943f11b673943eb2fc7_diktfq", twitch: "https://www.patreon.com/posts/creed-2-138556976?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "creed III", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/creed_iii_yk7afs", twitch: "https://www.patreon.com/posts/creed-3-138596215?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Harry Potter à l'école des sorciers", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/04140cbd-3b77-49f0-88bb-0a5d38b4e9a9_tztftb", twitch: "https://www.patreon.com/posts/harry-potter-1-137890082?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Harry Potter et la Chambre des secrets", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/affiche0_dud08k", twitch: "https://www.patreon.com/posts/harry-potter-2-137892340?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Harry Potter et le Prisonnier d'Azkaban", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/latest_yiowh3", twitch: "https://www.patreon.com/posts/harry-potter-3-137899318?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Harry Potter et la Coupe de feu", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/2qMk7LiL-KgPpWY_JC2fza8RG7M9m6nTrXCgTw_cJ2ABHgaKdR3s-eqPw_lH0p99Mp2KZrKjdeDci64dWnF8Ft3a3dJanTUMFNHHL4nJk1bNvl57GfBm4EdXne31aaz-fhzdt6iSf_WaJJ2uIqt0XoeR_iyrieb", twitch: "https://www.patreon.com/posts/harry-potter-4-137897660?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Harry Potter et l'Ordre du Phénix", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/80505-tyNj_slx6ry", twitch: "https://www.patreon.com/posts/harry-potter-5-137899396?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Harry Potter et le Prince de sang-mêlé ", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/d9264098974539ca3ca9721485c60ec1a9dca39a3a8e0ae30856c92cb1828910_cvjk7i", twitch: "https://www.patreon.com/posts/harry-potter-6-138313366?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Harry Potter et les Reliques de la Mort part.1", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/f62be0c0-a7df-445c-83a9-61f9ddd9a268_fz9oib", twitch: "https://www.patreon.com/posts/harry-potter-7-138316431?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Harry Potter et les Reliques de la Mort part.2", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/19762436_ypzdlq", twitch: "https://www.patreon.com/posts/harry-potter-8-138316682?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "le crocodile du botswanga", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/03a00e19fac1370beb9bc4d5a54633712e2dd1fc1736c314a96b25277f720e74_eis7m3", twitch: "https://www.patreon.com/posts/case-depart-x-du-102859340?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Le Bus : Les Bleus en grève ", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/xy5oC3dWw2OuSUHXIBPm6XQLk8n_qu9rd7", twitch: "https://www.patreon.com/posts/158899767?collection=2176996" },
    { nom: "le diner de cons", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/9782213727769-001-X_ie0zh0", twitch: "https://www.patreon.com/posts/le-diner-de-con-103902605?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "LES VISITEURS 1-2", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/18659413_mrbcu9", twitch: "https://www.patreon.com/posts/les-visiteurs-1-103234138?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "parasyte", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/PYH2019062303240000500_P2_pi5ims", twitch: "https://www.patreon.com/posts/parasyte-138317615?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "QU'EST CE QU'ON A FAIT AU BON DIEU", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/be72412312cf4dc6d122b9fd5a3ee0e81da17054e253e79129117448d3857a6c_i82mzo", twitch: "https://www.patreon.com/posts/quest-ce-quon-au-138438983?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "QU'EST CE QU'ON A FAIT AU BON DIEU 2", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/31cbfde156cad0a2802bf304bcbf63a6325a97c4867dd92b7887ac92ce7365be_lkhecr", twitch: "https://www.patreon.com/posts/quest-ce-quon-un-138444238?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Rogue One", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/9naVzrxeeS95u63TaglDfXHx08a_tibtlh", twitch: "https://www.patreon.com/posts/star-wars-2-3-88029913?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "sinister", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/sinister_rs8qwo", twitch: "https://www.patreon.com/posts/sinisters-1-137888817?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "sonic the hedgehog", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/u9I4h4wy6lnherWlMGfPMB697iE_wunsag", twitch: "https://www.patreon.com/posts/sonic-1-137894140?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "sonic the hedgehog 2", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/6ExLq0e44sn3Ztcw1vLON3Ehrj7_lnuyee", twitch: "https://www.patreon.com/posts/sonic-2-137894444?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "sonic the hedgehog 3", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/mcZ1lBaL7MXUijQmn2Jp19vw0qQ_nxnuiw", twitch: "https://www.patreon.com/posts/sonic-3-137895356?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "spiderman 1-2-3", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/s-l400_psdjhg", twitch: " https://www.patreon.com/posts/spiderman-1-2-3-88036319?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "spiderman no way home", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/zC3aNwFlLg27rzKuYS38RfpFfjR_zzwutv", twitch: "https://www.patreon.com/posts/spiderman-no-way-138444837?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Star Wars, épisode I - La Menace fantôme", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/xQzMnuiv81d0gfUIVstuleNutjA_j3cogu", twitch: "https://www.patreon.com/posts/star-wars-1-87905154?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Star Wars, épisode II - L'Attaque des clones", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/kDLTGKYFM8Z31E0dBr9uTLF2DxS_pkcbav", twitch: "https://www.patreon.com/posts/star-wars-2-3-88029913?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Star Wars, épisode III - La Revanche des Sith", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/tOK1k5uGKGS2t29pnshU485EmWy_fq1pnw", twitch: "https://www.patreon.com/posts/star-wars-2-3-88029913?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" }
];

const animationList = [
    { nom: "a silent voice", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/xojX4BFXkj92CnkYuwmlZXNjpr8_thhkuz", twitch: "https://www.patreon.com/posts/silent-voice-i-80439365?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "black clover: the sword of the wizard king", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/osouyjGx1h5FgojMSKEKToua4TJ_fq0sgb", twitch: "https://www.patreon.com/posts/black-clover-95145085?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "cars 1", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/7Av0QBIK2gvlCuR7xFVCy8IwHC3_bla3bu", twitch: "" },
    { nom: "cars 2", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/cUALhEdsHJlRv3fRFQsWD28xExW_fpzxe3", twitch: "" },
    { nom: "cars 3", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/gbprormpTPWnmAQrIG07OpLTpCf_xcitji", twitch: "" },
    { nom: "dragons 1 ", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/3kXIwnm8qftufEflzu0FwZV10zM_qo3phu", twitch: "" },
    { nom: "dragons 2", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/tI2iAN0pQ3n4Wjnx835C5QaZtB7_jjar5x", twitch: "" },
    { nom: "dragon 3", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/7qko9CINTCUAy4OhzNpxpaC9KBv_bvdg9d", twitch: "" },
    { nom: "fairy tail dragon cry", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/fairy-tail-dragon-cry-affiche-fr_nn48cz", twitch: "https://www.patreon.com/posts/film-fairy-tail-82114049?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "fairy tail la pretresse du phoenix", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/fairy_tail_-_la_pretresse_du_phoenix_1980578_vo2_gxdbf5", twitch: "https://www.patreon.com/posts/film-fairy-tail-82114049?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "fruit basket: film final", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/fruits-basket-prelude_u7eisl", twitch: "https://www.patreon.com/posts/fruit-basket-86097287?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "i want to eat your pancreas", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/3Ei4hmeZBlQcCuPgI65KPjMGswM_jabsdo", twitch: "https://www.patreon.com/posts/silent-voice-i-80439365?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "kpop demon hunter", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/kpdh_nrba09", twitch: "https://www.patreon.com/posts/kpop-demon-150206888?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "kung fu panda", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/4uirEhidRT29UBpAXzTEXamBAtr_zi7jdp", twitch: "" },
    { nom: "kung fu panda 2", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/cbAJNp4xl0UHkOPn9gC5yCT3tZu_mtu6te", twitch: "" },
    { nom: "kung fu panda 3", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/3BSEsUz9oinbS8hLATjBPttx4RT_wbkpsw", twitch: "" },
    { nom: "le chateau dans le ciel", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/7tTUs77uOWee6GIOMB6OhtLgslI_ssmiop", twitch: "https://www.patreon.com/posts/chateau-dans-le-105662948?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "le vent se lève", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/bQcNJ8inwZuxAZ965jRCjjCti0D_jbziao", twitch: "https://www.patreon.com/posts/le-vent-se-leve-105902324?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "le voyage de chihiro", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/chihiro_p6pwxj", twitch: "https://www.patreon.com/posts/voyage-de-your-80438364?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "mon voisin totoro !", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/71eIcv8WVL._AC_UF10001000_QL80__gsx1dl", twitch: "https://www.patreon.com/posts/ponyo-sur-la-mon-104815608?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "naruto the last", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/phPfQ4jWhwmZrmPhAtVYUJfqfwG_n8rkd7", twitch: "https://www.patreon.com/posts/naruto-last-73651281?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Nausicaä de la vallée du vent ", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/sIcv6IiaL6Ad2KGUOdRyJHIZpgC_iv5jaw", twitch: "https://www.patreon.com/posts/nausicaa-et-la-104619751?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "ponyo sur la falaise", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/5M78aZRK4TKklk7SwIAof8dnNyP_khwzqn", twitch: "https://www.patreon.com/posts/ponyo-sur-la-mon-104815608?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Princesse Mononoké", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/1AfSDxBTYYtQRVY2V1ISgxXNPVx_y6n3hl", twitch: "https://www.patreon.com/posts/tombeau-des-x-104080228?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Seven Deadly Sins, le film : Prisoners of the Sky", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/p16408242_v_v8_ac_x9hnm8", twitch: "https://www.patreon.com/posts/7ds-s2-21-24-1-111184163?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "seven deadly sins cursed by light", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/0156680_xsqaj8", twitch: "https://www.patreon.com/posts/7ds-final-film-113033263?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Spider-Man: New Generation", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/iiZZdoQBEYBv6id8su7ImL0oCbD_vr5wrm", twitch: " https://www.patreon.com/posts/spiderman-miles-90868146?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "Spider-Man: Across the Spider-Verse", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/jN1tz3Z10gUOdb11iPwQd6JBlms_e0cthx", twitch: " https://www.patreon.com/posts/spiderman-miles-90868146?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "tombeau des lucioles", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/gNJop6GC2UJMdxZy4SFqdtEhy5M_yzwh1w", twitch: "https://www.patreon.com/posts/tombeau-des-x-104080228?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "your name", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/2ki2gjss7pEhxqhEOE49cbzHfyC_ocep95", twitch: "https://www.patreon.com/posts/voyage-de-your-80438364?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" }
];

const serieList = [
    { nom: "100% physique", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/1rR4vSxM0R1qlIp5AbgB2ap1zxm_tdv5gu", twitch: "https://www.patreon.com/collection/1632117?view=expanded" },
    { nom: "alice in borderlands", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/Ac8ruycRXzgcsndTZFK6ouGA0FA_k6coj8", twitch: "https://www.patreon.com/collection/1998609?view=expanded" },
    { nom: "all of us are dead", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/pTEFqAjLd5YTsMD6NSUxV6Dq7A6_l78ypl", twitch: "https://www.patreon.com/collection/2217370?view=expanded" , statut: "encours" },
    { nom: "la traque dans le sang", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/932h4WSwKmVz387hDfBfq4ryIFD_hhi7fn", twitch: "https://www.patreon.com/collection/2187247?view=expanded" },
    { nom: "one piece live action", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/yEtSBgugED8XyhqjcKgF6j2zDMf_pll1sq", twitch: "https://www.patreon.com/collection/1845001" },
    { nom: "sauve qui pecho", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/h6Twsz6h5CAcguCzJkgnYZ6vkhb_yrp1y2", twitch: "https://www.patreon.com/collection/1404560?view=expanded" },
    { nom: "weak hero class", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/o6s8oIqXhXAZ05F6V1bR230n9zq_xlo89e", twitch: "https://www.patreon.com/collection/2174803?view=expanded" },
    { nom: "YOU", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_800,f_auto,q_auto/sMF0G96CdgTNrVy52BJnux5pNB5_fja49i", twitch: "https://www.patreon.com/collection/2041969?view=expanded" }
];

const episodeAnime = [
    { nom: "17 26", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/tMdwHwA0mcXRoKTE40nqN9bgRpj_akx5hm", twitch: "https://www.youtube.com/watch?v=-WyMP6hjIFs" },
    { nom: "4koa", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/6SWVJvCIC9B16u6wASZ8FEaNssz_cwidve", twitch: "https://www.youtube.com/watch?v=-WyMP6hjIFs" },
    { nom: "8 mort 6 blessé", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/96mUvRlJBYOMBdbn30wtoh7QrpY_l9lo9x", twitch: "https://www.youtube.com/watch?v=XETKLmCfwk8", statut: "ban" },
    { nom: "ao ashi", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/iN1thFI3XFeKAf2pZSd8IkZexE5_t6t9lw", twitch: "" },
    { nom: "akatsuki no yona", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/870d33e73fce20592c3097fd43894afa_zhyfzo", twitch: "" },
    { nom: "bakuman", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/4ixcJVoPuAoMcxgoNiGtHr2rwq8_psllpz", twitch: "https://www.youtube.com/watch?v=28HcTbePI7E" },
    { nom: "ballroom", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/iGf49kruXI3mMpfBD43ZtxXE7MC_fkuhcp", twitch: "https://www.youtube.com/watch?v=ApO78dmkt0A" },
    { nom: "baki", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/j4bL0G8h8k49MuXKYfZqhXqk2rI_k9iv4w", twitch: "" },
    { nom: "beelzebub", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/9PrGUIihgaKvZaUPiLVCB8ksZ7M_xz7lky", twitch: "https://www.youtube.com/watch?v=ApO78dmkt0A", statut: "ban" },
    { nom: "big order", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/SdIuHgVYXUxitaDDL0Z2PJzJod_wdwpfc", twitch: "https://www.youtube.com/watch?v=8byIUPxgetE" },
    { nom: "blue exorcist", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/aKQIWtOoNVejjtaHUDs79XxrzYG_qpr9ai", twitch: "" },
    { nom: "bocchi the rock!", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/zDu2Ey1nYwe4EdMP26P7XbbwnBI_bk9uyc", twitch: "https://www.youtube.com/watch?v=z1ojBinRY5Y" },
    { nom: "bunny girl senpai", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/kVFszsNX8f7LnajQSNJqlTOdy0y_md2mgn", twitch: "https://www.youtube.com/watch?v=1kMB7T8MQv8" },
    { nom: "bungo stray dogs", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/6AQmGhkYwAqW2OevjXbsh7tZnNO_g9fzcc", twitch: "https://www.youtube.com/watch?v=WfPD7MbY3yY" },
    { nom: "carmen san diego", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/jpis9X6awQ1X5MBm9eHRUc0N0pu_ghwpci", twitch: "https://www.youtube.com/watch?v=zi60YV-Ei4c" },
    { nom: "charlotte", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/udiCs1RBGfda1z52cBxu8j9JNmP_nhvv3i", twitch: "" },
    { nom: "Cheat Skill Level Up", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/s3GM0PivWFbRybrDwwNosRBt2jA_ipstgp", twitch: "https://www.patreon.com/posts/cheat-skill-up-153623775?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_fan&utm_content=web_share" },
    { nom: "classroom of the elite", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/yuHanbUUIv2UWRxxQFt9n8jtmOJ_wiaqmo", twitch: "https://www.youtube.com/watch?v=ApO78dmkt0A" },
    { nom: "clone wars", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/5PfatRRPXF1N1mmCMq6Du3MxCvB_aoavnm", twitch: "https://www.youtube.com/watch?v=28HcTbePI7E" },
    { nom: "code geass", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/x316WCogkeIwNY4JR8zTCHbI2nQ_cjn7ks", twitch: "https://www.youtube.com/watch?v=6a4-DohiJ6o" },
    { nom: "dandadan", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/cdecb11edd24867bf1e2f4be220aab2c_f9zpbx", twitch: "https://www.youtube.com/watch?v=1kMB7T8MQv8" },
    { nom: "danmachi", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/a7gxtI2DLLOlEMC3u9FwtHKHquK_yz1ogy", twitch: "https://www.youtube.com/watch?v=0YPlIj0-xFM" },
    { nom: "Delicious in Dungeon", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/271be6b28874dca9c82de966e1e2902f_hbo9cu", twitch: "https://www.youtube.com/watch?v=0YPlIj0-xFM" },
    { nom: "devil may cry", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/mX9tqfpjqwreONJHhap7SnSSowe_vde5lp", twitch: "https://www.youtube.com/watch?v=0YPlIj0-xFM" },
    { nom: "distributeur simulator la", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/bY6oLDoxDyP7JNLVGjeO3udND4g_wnwkom", twitch: "https://www.youtube.com/watch?v=8byIUPxgetE" },
    { nom: "edens zero", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/nfkn7IVG5aY2fyjHBIF3A98rMcl_x05wio", twitch: "https://www.youtube.com/watch?v=-WyMP6hjIFs", statut: "ban" },
    { nom: "eminence in shadow", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/7JKYmtLydAwo9ZsEmAknZiO4U8g_sgbyaz", twitch: "" },
    { nom: "ex arm", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/cjsebpk01OZBGuVKhJm68oYxM4t_o2uy1f", twitch: "https://www.youtube.com/watch?v=8byIUPxgetE" },
    { nom: "fate apocrypha", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/fzLQF8OJDqHDcHHyx59tlGv6GTq_r4fbpg", twitch: "https://www.youtube.com/watch?v=6a4-DohiJ6o" },
    { nom: "frieren", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/4ITbCMbUWn1aNdI9mjeIB1XxyoI_chhlbg", twitch: "https://www.youtube.com/watch?v=XETKLmCfwk8" },
    { nom: "gachiakuta", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/cv84L2rselvj8pW5nfCZWqAiTaT_qzijii", twitch: "https://www.youtube.com/watch?v=28HcTbePI7E" },
    { nom: "gurren lagann", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/gH8W7855SNXTXgMOGhTHj9omXfc_x90k5s", twitch: "" },
    { nom: "gintama", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/ljRN8RYpwGiqfbagtc3UjBEqR4T_ezptkf", twitch: "" },
    { nom: "grand blue", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,c_fill,g_auto,f_auto,q_auto:good/nddhOysUifZrvkk5NmnA69lnY1N_bpcb35", twitch: "" },
    { nom: "haram hotel", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/d8j99fkmRnQzfygdsOX0sQYexmY_laiahl", twitch: "https://www.youtube.com/watch?v=zi60YV-Ei4c", statut: "ban" },
    { nom: "hells paradise", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/1V9I7SvZbYoMbSvdtnlkkq9SB1k_qrim2r", twitch: "https://www.youtube.com/watch?v=6a4-DohiJ6o" },
    { nom: "huntik", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/v3pL45juySE3NtAbrTrqMFtwhS0_i8afjk", twitch: "https://www.youtube.com/watch?v=G-MHtIzPv_c", statut: "ban" },
    { nom: "iruma kun", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/msqjiRwQiaGQpPdnG0Y4OYjDqL9_kpvjkx", twitch: "" },
    { nom: "inferno cop", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/qhxvFL1CZX1jqWMFC32CCtY2xIn_gt09zc", twitch: "https://www.youtube.com/watch?v=8byIUPxgetE" },
    { nom: "kaiji", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/hKTG76a11adML9ecbJt07D3jH8i_uyj9b7", twitch: "" },
    { nom: "kamikatsu truc", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/d82CH1EMSoC2VvYSTxCZHPboJYq_xl73bq", twitch: "https://www.youtube.com/watch?v=vJY9wElTxwA" },
    { nom: "keijo !!!!", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/xKDxK1scuu5vuJojFcxu4EtY6sF_kfuydu", twitch: "https://www.youtube.com/watch?v=0YPlIj0-xFM" },
    { nom: "kingdom", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/dehuJJkKo50nYvCYppigrWejqLe_nvo3zf", twitch: "https://www.youtube.com/watch?v=8byIUPxgetE" },
    { nom: "le prisme de l'amour", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/sPLatQFX8z74hioTSJallcAswd7_a0202p", twitch: "https://www.youtube.com/watch?v=z1ojBinRY5Y" },
    { nom: "lord of mysteries", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/c8fHePq3yTn3WvZd4hupkHwsjm5_i3g00o", twitch: "https://www.youtube.com/watch?v=-WyMP6hjIFs" },
    { nom: "made in abyss", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/f6U3odfIb3pCXMGKRTQGGF9o1Qg_ayz4bs", twitch: "https://www.youtube.com/watch?v=6a4-DohiJ6o" },
    { nom: "mermaid melody", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/jwDEHBO48GK8bL6pkHoQfgNyzHk_ajtdvp", twitch: "https://www.youtube.com/watch?v=vJY9wElTxwA" },
    { nom: "moi quand je me réincarne en slime", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/5a5fff58bd7abbfcf4ae400537f2f917_cv9coc", twitch: "" },
    { nom: "mob psycho 100", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/oUh3wIqiJ573vWY1ZpVxEYUdg5g_lum1f0", twitch: "" },
    { nom: "monster", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/n5XNKXnoXpoXyfiCtXHOf8q8PFM_bsnml6", twitch: "https://www.youtube.com/watch?v=WfPD7MbY3yY" },
    { nom: "mushoku tensei", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/84480169596d9ce5fc8087a015c8a21d_cpikai", twitch: "https://www.youtube.com/watch?v=28HcTbePI7E" },
    { nom: "nana", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/egEROVWFVUupRhK03Bj5IVGAEGu_lnqg3e", twitch: "https://www.youtube.com/watch?v=-WyMP6hjIFs" },
    { nom: "orange", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/6GGkAhfjZy9rOvUD7K927vnltZA_z0lhve", twitch: "https://www.youtube.com/watch?v=28HcTbePI7E" },
    { nom: "overlord", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_610,c_fill,g_auto,f_auto,q_auto:good/K8ZUjxaj9F0t3AwJDz8ypzBynM_j7h3ky", twitch: "" },
    { nom: "oshi no ko", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/rFp74PFpz14AHrtlVPrLyrSng47_nbi7my", twitch: "https://www.youtube.com/watch?v=ApO78dmkt0A", statut: "ban" },
    { nom: "paranoia agent", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/cQ6YiBTUlsKGm2mWa7mE9eZnlS2_u71co2", twitch: "https://www.youtube.com/watch?v=G-MHtIzPv_c", statut: "ban" },
    { nom: "platinum end", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/hxL3ZYeS1GYORKGHG9FI0l6QXQF_lgfid7", twitch: "https://www.youtube.com/watch?v=G-MHtIzPv_c" },
    { nom: "ranma 1/2", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/cDThx8yRYbdPOSgHbjihS4q7GYc_cjc8di", twitch: "" },
    { nom: "ragna crimson", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/oGmNWwV3wgp1DZXTOLSAYZZgh3X_vteux2", twitch: "" },
    { nom: "rooster fighter", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/iCtbr0sIdaKZjhQH3Wr7hW6A1IU_jqsfn3", twitch: "https://www.youtube.com/watch?v=z1ojBinRY5Y" },
    { nom: "saga of tana the evil", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/5nwiHomKZBBF9DLrolfZapi3fDm_mkebqk", twitch: "https://www.youtube.com/watch?v=XETKLmCfwk8" },
    { nom: "saint seiya the lost calvace", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/eJNAxUHVXXUSbuc6D1ojSYH6S1r_brslfp", twitch: "https://www.youtube.com/watch?v=zi60YV-Ei4c" },
    { nom: "sakamoto days", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/lRNXHxuOVO9TWIs98IOHTjY8XN7_opbxbl", twitch: "https://www.youtube.com/watch?v=zi60YV-Ei4c", statut: "ban" },
    { nom: "sailor moon crystal", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/mVXlsNJw4fxD2UWNzaUh2TFfI5c_ukzuom", twitch: "" },
    { nom: "scissor seven", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/mSLSrOndwNoompAARPHBaxF2E6E_eeaeqx", twitch: "https://www.youtube.com/watch?v=ApO78dmkt0A" },
    { nom: "shangri la frontier", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/aCGdpgNkgz66R1winFkTFsMAhlC_qljucq", twitch: "https://www.youtube.com/watch?v=1kMB7T8MQv8" },
    { nom: "soul eater", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/hAszc4fYfKU4SexxiSIigS3z2WU_tsygxa", twitch: "https://www.youtube.com/watch?v=6a4-DohiJ6o" },
    { nom: "summer time rendering", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/9qFqCxPr1ebHbOmZ1vEmPAHLIM4_lxbjpl", twitch: "https://www.youtube.com/watch?v=z1ojBinRY5Y" },
    { nom: "the apothecary dhiarée", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/bd7c59b08a68126baaff7cb3844c6096_yycafo", twitch: "https://www.youtube.com/watch?v=0YPlIj0-xFM" },
    { nom: "the beginning after the end", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/u0QWnKUhxcxecQSclMBNnO5MXh_bxthl2", twitch: "https://www.youtube.com/watch?v=vJY9wElTxwA" },
    { nom: "the misfit of king academy machin truc", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/b8b224231db17d6907f64bb55282dbb9_e0q7hr", twitch: "" },
    { nom: "to your eternity", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/lA2jRBubr2OLOlbkJXuBXYqv4A9_soaj0r", twitch: "https://www.youtube.com/watch?v=6a4-DohiJ6o" },
    { nom: "tomodachi game", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/l9wfsCpH5Zot8PSskCShqiQc9I4_eujtxs", twitch: "https://www.youtube.com/watch?v=WfPD7MbY3yY" },
    { nom: "trigun stampede", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/nF98arp4oOo7qOEUjXfXq0V5ovl_se0uh0", twitch: "https://www.youtube.com/watch?v=XETKLmCfwk8" },
    { nom: "valkyrie apocalypse", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/6IZGeOFlIx09eUiBEAc7jM3ZOGd_q4jpnk", twitch: "https://www.youtube.com/watch?v=WfPD7MbY3yY" },
    { nom: "viral hit", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/g0k4HFTq4ad4nLSo7VrbljXvqFe_wmi6z1", twitch: "" },
    { nom: "violet evergarden", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/61EwFPqc0r1uJo6la49J55F8bQ8_juhsed", twitch: "https://www.youtube.com/watch?v=z1ojBinRY5Y" },
    { nom: "wind breaker", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_400,h_600,c_fill,g_auto,f_auto,q_auto:good/3kTFL3PAeTyS8gGZAh0iYG6NNjt_qzxtzs", twitch: "" },
    { nom: "zoophilie pro max", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/uQb3NkDWEXQ9m1w49PzEy04uFn1_zmocug", twitch: "https://www.youtube.com/watch?v=8byIUPxgetE" }
];

const episodeSerie = [
    { nom: "all of us are dead", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/pTEFqAjLd5YTsMD6NSUxV6Dq7A6_l78ypl", twitch: "https://www.youtube.com/watch?v=ghKHtETNteY" },
    { nom: "dexter", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/uQwpPjM3gScW914MYYOx7li8sN3_cowwru", twitch: "https://www.youtube.com/watch?v=0FtDK5TFEiE" },
    { nom: "Le Choc des toques", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/dXaSWfISSbivyNy9X6zkOnxD9Gp_fwy6s1", twitch: "https://www.patreon.com/collection/2041706" },
    { nom: "lucifer (L sheytan)", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/ekZobS8isE6mA53RAiGDG93hBxL_bjphnt", twitch: "https://www.youtube.com/watch?v=0FtDK5TFEiE" },
    { nom: "lupin", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/sOUWRai0215iUSMackrZx3Y1j05_ydvwpb", twitch: "https://www.youtube.com/watch?v=mFe9t6BPa5w" },
    { nom: "slasher", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/A4j6zNyypLbsn0vJfrajlgNazc5_sngjp2", twitch: "", statut: "ban" },
    { nom: "sweet home", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/zcugNxDg59YwIf3dUHsrHmO7pc1_hkfhqz", twitch: "https://www.patreon.com/collection/2041716" },
    { nom: "the 8 show", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/3LcyKtMmDWwgK4T5d4cf8quHWOa_tuh7rh", twitch: "https://www.youtube.com/watch?v=ghKHtETNteY" },
    { nom: "vampire diaries", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/xKltipwfXRgvyD2u79FUnXAZ09F_tio45y", twitch: "https://www.youtube.com/watch?v=ghKHtETNteY" }
];


const listeRecaps = [
    { titre: "recap 2023", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/Capture_d_écran_2026-05-11_125606_nz5yat", url: "https://canva.link/ldxuizsn6e39z2k"},
    { titre: "recap 2024", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/Capture_d_écran_2026-05-11_130743_fqsyf9", url: "https://canva.link/8r5ff72b2dt35he"},
    { titre: "recap 2025 part. 1", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/Capture_d_écran_2026-05-11_131323_sw499t", url: "https://canva.link/d1af7odzd49mdp1"},
    { titre: "recap 2025 part. 2", img: "https://res.cloudinary.com/dyhcasitx/image/upload/w_600,f_auto,q_auto/Capture_d_écran_2026-05-11_131826_g2mnnr", url: "https://canva.link/qbncwkthvctgd9e"},

];

const listeArrache = [
    { id: 1, titre: "CE STREAMER ELDEN RING SE CONFIE SUR SON DRAMA !", img: "https://img.youtube.com/vi/NYbYeESWyNc/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=NYbYeESWyNc&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd", invites: "Erastem" },
    { id: 2, titre: "IL S'EST FAIT MENACER PAR UNE SECTE A CAUSE DE FRIEREN !", img: "https://img.youtube.com/vi/wfu0nG7FezE/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=wfu0nG7FezE&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd", invites: "Nicky" },
    { id: 3, titre: "IL NOUS DIT LA SOMBRE VÉRITÉ SUR LES INFLUENCEURS ANIME/MANGA !", img: "https://img.youtube.com/vi/9uxfh42NuO4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=9uxfh42NuO4&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd", invites: "mino & kailon" },
    { id: 4, titre: "DOFLA RACONTE CE QUI LUI EST ARRIVE A CAUSE DE SES OPINIONS ! ", img: "https://img.youtube.com/vi/e27ytq4eS2g/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=e27ytq4eS2g&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd", invites: "dofla et la camera arriere de sa clio" },
    { id: 5, titre: "LILMCQUEEN NOUS DIT LA VÉRITÉ SUR SON BUZZ ! ", img: "https://img.youtube.com/vi/p_Cu4UQi-mM/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=p_Cu4UQi-mM&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd", invites: "lilmcqueen" },
    { id: 6, titre: "RYOSENSEI NOUS LIVRE TOUS LES SECRETS DE ONE PIECE !", img: "https://img.youtube.com/vi/0NFIXs6s8o4/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=0NFIXs6s8o4&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd&index=1", invites: "ryosensei" },
    { id: 7, titre: "MADEMOISELLE SOSO NOUS DIT LA VERITE SUR SES PLUS GROSSES SAUCES !", img: "https://img.youtube.com/vi/-bSnegEFPng/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=-bSnegEFPng&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd", invites: "mademoiselle soso" },
    { id: 8, titre: "JOSPLAY NOUS PARLE SANS FILTRE ET C'EST EXCEPTIONNEL !", img: "https://img.youtube.com/vi/ZRhG8nxO4io/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=ZRhG8nxO4io&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd", invites: "josplay" },
    { id: 9, titre: "XABAB NOUS LIVRE LE SECRET DE SON PLUS GROS DRAMA  !", img: "https://img.youtube.com/vi/mYpe4jVW030/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=mYpe4jVW030&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd&index=1", invites: "xabab" },
    { id: 10, titre: "DE CANCRE A STREAMER : LE PARCOURS FOU DE SHINI !", img: "https://img.youtube.com/vi/2mD4Tt70a0M/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=2mD4Tt70a0M&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd", invites: "shini" },
    { id: 11, titre: "LEMED ETAIT SUR LE POINT DE TOUT STOP… PUIS CE VOYAGE A TOUT CHANGE  !", img: "https://img.youtube.com/vi/eLQxMKwV_LY/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=eLQxMKwV_LY&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd&index=1", invites: "lemed" },
    { id: 12, titre: "REGELEGORILA révèle son secret le plus sombre…", img: "https://img.youtube.com/vi/GLNA1eOWKFs/maxresdefault.jpg", url: "https://www.youtube.com/watch?v=GLNA1eOWKFs&list=PLZDvlSwiTr9_1H0ciay6t1blGaFlR0rmd", invites: "regelegorilla" },

    
];

const listeArchive = [
    
    { titre: "Comment le sergent Femi boit de l'eau", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/Capture_d_écran_2026-06-04_172231_ng8qwm", url: "https://www.twitch.tv/femimarss/clip/BlindingCovertDillBudBlast"},
    { titre: "1....2.....3.....SOLEIL!!!!", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/Capture_d_écran_2026-06-04_173122_hvix5e", url: "https://www.twitch.tv/femimarss/clip/PatientBenevolentReubenTTours-ucaT3zkZAtn5fwPp"},
    { titre: "hooo", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/Capture_d_écran_2026-06-04_173444_hy4wod", url: "https://www.twitch.tv/femimarss/clip/RoundFitLarkEagleEye"},
    { titre: "react smash amouranth", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/thumb-0000000000-1920x1080_jiprji", url: "https://clips.twitch.tv/SmilingRacyOstrichRiPepperonis-9xhadjttF1MCe3Dt?tt_content=url&tt_medium=clips_api"},
    { titre: "Quand tu fais partie du game", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/thumb-0000000000-1280x720_mc9jgr", url: "https://www.twitch.tv/femimarss/clip/TameVictoriousStarDogFace"},
    { titre: "le raptor", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/thumb-0000000000-1920x1080_wh4hpm", url: "https://www.twitch.tv/femimarss/clip/UnusualExcitedTildeRiPepperonis-vXTcr916Gw8pM2Cs"},
    { titre: "femikura entre en scene", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/thumb-0000000000-1920x1080_khjpz0", url: "https://www.twitch.tv/femimarss/clip/FreezingTastyStrawberryResidentSleeper-VPw6CWrbb6Lr60j9"},
    { titre: "Ni vu ni connu", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/thumb-0000000000-1280x720_svycvn", url: "https://www.twitch.tv/femimarss/clip/AltruisticThankfulOrangeSuperVinlin-NZ7_jxuYypKpfHPP"},
    { titre: "comment ca mon reuf ?", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/thumb-0000000000-1920x1080_imjmyd", url: "https://www.twitch.tv/femimarss/clip/RudeModernSaladStrawBeary-g5UvbHl1SrQcPalo"},
    { titre: "ame sensible s'abstenir", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/thumb-0000000000-1920x1080_qslzgz", url: "https://www.twitch.tv/femimarss/clip/GiantTenuousLobsterPoooound-1AVJakN8TsP-QB1Z"},
    { titre: "LE PANIER INCROYABLE", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/thumb-0000000000-1280x720_di0lnq", url: "https://www.twitch.tv/femimarss/clip/PoisedWanderingToothMoreCowbell-CV6oRh7Jg3Jt-Mot"},
    { titre: "la fin du commencement...", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/thumb-0000000000-1920x1080_jt4lkj", url: "https://www.twitch.tv/femimarss/clip/FairPatientQuailTooSpicy-sVgNr33YKqD84ijI"},
    { titre: "femi??????", img: "https://res.cloudinary.com/dbymxvjo1/image/upload/w_600,f_auto,q_auto/thumb-0000000000-1920x1080_pt0luf", url: "https://www.twitch.tv/femimarss/clip/TastyTenderGrasshopperDoubleRainbow-JuSijyPK__NF_uox"},
    

];
let currentTwitch = ""; 
function remplirGrille(listeDeJeux, idDeLaGrille) {
    const grille = document.getElementById(idDeLaGrille);
    if (!grille) return;

    

    grille.innerHTML = "";

    listeDeJeux.forEach(jeu => {
        const carte = document.createElement('div');
        carte.className = 'game-card';
        carte.onclick = () => ouvrirCarte(jeu.img, jeu.nom, jeu.twitch || "", jeu.statut || "");

        let badgeHTML = "";
        if (jeu.statut) {
            badgeHTML = `<div class="class=badge-statut ${jeu.statut.toLowerCase()}"></div>`;
        }

       
        const imgOptimisee = optimiserImageCloudinary(jeu.img, 'moyenne');

        carte.innerHTML = `
            <div class="image-container">
                ${badgeHTML}
                <img src="${imgOptimisee}" alt="${jeu.nom}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22150%22 height=%22210%22 style=%22background:%23222%22><text x=%2250%%22 y=%2250%%22 font-size=%2230%22 fill=%22%23444%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22>?</text></svg>'">
            </div>
            <p class="game-title">${jeu.nom}</p>
        `;
        grille.appendChild(carte);
    });
}

function ouvrirCarte(img, titre, twitch, statut) {
    const overlay = document.getElementById('game-overlay');
    const imgElement = document.getElementById('overlay-img');
    const titleElement = document.getElementById('overlay-title');

    if (overlay && imgElement && titleElement) {
       
        imgElement.src = optimiserImageCloudinary(img, 'basse');
        titleElement.innerText = titre;
        currentTwitch = twitch;

     
        const imageHauteQualite = new Image();
        imageHauteQualite.src = optimiserImageCloudinary(img, 'haute');
        imageHauteQualite.onload = () => {
            imgElement.src = imageHauteQualite.src; 
        };

        const existingBadge = overlay.querySelector('.badge-modal');
        if (existingBadge) existingBadge.remove();

        const statutsAutorises = ["drop", "encours", "ban"]; 
        if (statut && statutsAutorises.includes(statut.toLowerCase())) {
            const badge = document.createElement('div');
            badge.className = `badge-modal ${statut.toLowerCase()}`;
            if (statut.toLowerCase() === "ban") {
                badge.innerText = "BAN";
            } else {
                badge.innerText = statut.toUpperCase().replace("ENCOURS", "EN COURS");
            }
            const container = overlay.querySelector('.overlay-image-container');
            if (container) container.appendChild(badge);
        }

        overlay.style.display = 'flex';
    }
}


document.getElementById('game-overlay').onclick = function(e) {
   
    if (e.target.id === 'overlay-img') return;
    
    this.style.display = 'none';
};

document.getElementById('overlay-img').onclick = function(e) {
    e.stopPropagation(); 
    if (typeof currentTwitch !== 'undefined' && currentTwitch) {
        window.open(currentTwitch, '_blank');
    }
};




remplirGrille(jeux2026, 'grid-2026');
remplirGrille(jeux2025, 'grid-2025');
remplirGrille(jeux2024, 'grid-2024');
remplirGrille(jeux2023, 'grid-2023');
remplirGrille(jeux2022, 'grid-2022');
remplirGrille(jeux2021, 'grid-2021');
remplirGrille(jeux2020, 'grid-2020');
remplirGrille(animesList, 'grid-animes');
remplirGrille(filmList, 'grid-film');
remplirGrille(serieList, 'grid-serie');
remplirGrille(animationList, 'grid-animation');
remplirGrille(episodeAnime, 'grid-episode');
const toutesLesListes = [...jeux2026, ...jeux2025, ...jeux2024,...jeux2023, ...jeux2022, ...jeux2021, ...jeux2020, ...animesList,...filmList, ...animationList, ...serieList, ...episodeAnime, ...episodeSerie];

function changerCategorie(type, boutonClique) {
    // 1. Sélectionne la bonne liste (episodeAnime ou episodeSerie)
    const listeChoisie = (type === 'anime') ? episodeAnime : episodeSerie;
    
    // 2. Remplit ta grille avec tes cartes
    remplirGrille(listeChoisie, 'grid-episode');

    // 3. Aligne la classe active sur les boutons
    if (boutonClique) {
        document.querySelectorAll('#episode .tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        boutonClique.classList.add('active');
    }
}

const inputRecherche = document.getElementById('recherche'); 
const resultsDiv = document.getElementById('results');
let rechercheTimer;

// 🌟 OPTIMISATION 1 : Centralisation des listes pour éviter les doublons de code
function fusionnerToutesLesListes() {
    return [
        ...(typeof jeux2026 !== 'undefined' ? jeux2026 : []),
        ...(typeof jeux2025 !== 'undefined' ? jeux2025 : []),
        ...(typeof jeux2024 !== 'undefined' ? jeux2024 : []),
        ...(typeof jeux2023 !== 'undefined' ? jeux2023 : []),
        ...(typeof jeux2022 !== 'undefined' ? jeux2022 : []),
        ...(typeof jeux2021 !== 'undefined' ? jeux2021 : []),
        ...(typeof jeux2020 !== 'undefined' ? jeux2020 : []),
        ...(typeof animesList !== 'undefined' ? animesList : []),
        ...(typeof filmList !== 'undefined' ? filmList : []),
        ...(typeof animationList !== 'undefined' ? animationList : []),
        ...(typeof serieList !== 'undefined' ? serieList : []),
        ...(typeof episodeAnime !== 'undefined' ? episodeAnime : []),
        ...(typeof episodeSerie !== 'undefined' ? episodeSerie : [])
    ];
}

if (inputRecherche && resultsDiv) {
    inputRecherche.addEventListener('input', (e) => {
        const texteRecherche = e.target.value.toLowerCase().trim();

        clearTimeout(rechercheTimer);

        if (texteRecherche === "") {
            resultsDiv.style.display = 'none';
            return;
        }

        rechercheTimer = setTimeout(() => {
            const listesMisesAJour = fusionnerToutesLesListes();

            // 🌟 OPTIMISATION 2 : Filtrage ET tri par pertinence (Recherche exacte d'abord)
            const resultats = listesMisesAJour
                .filter(item => item && item.nom && item.nom.toLowerCase().includes(texteRecherche))
                .sort((a, b) => {
                    const nomA = a.nom.toLowerCase();
                    const nomB = b.nom.toLowerCase();

                    // 1. Correspondance exacte
                    if (nomA === texteRecherche && nomB !== texteRecherche) return -1;
                    if (nomB === texteRecherche && nomA !== texteRecherche) return 1;

                    // 2. Commence par le mot recherché
                    const commenceA = nomA.startsWith(texteRecherche);
                    const commenceB = nomB.startsWith(texteRecherche);
                    if (commenceA && !commenceB) return -1;
                    if (commenceB && !commenceA) return 1;

                    // 3. Sinon, tri alphabétique classique pour garder un ordre propre
                    return nomA.localeCompare(nomB);
                })
                .slice(0, 6); // On garde les 6 meilleurs après le tri

            if (resultats.length > 0) {
                resultsDiv.innerHTML = resultats.map(item => {
                    const safeNom = item.nom.replace(/'/g, "\\'");
                    
                    let typeTexte = "Jeu"; 
                    if (typeof animesList !== 'undefined' && animesList.includes(item)) {
                        typeTexte = "Anime";
                    } else if ((typeof filmList !== 'undefined' && filmList.includes(item)) || 
                               (typeof animationList !== 'undefined' && animationList.includes(item))) {
                        typeTexte = "Film"; 
                    } else if (typeof serieList !== 'undefined' && serieList.includes(item)) {
                        typeTexte = "Serie";
                    } else if (typeof episodeSerie !== 'undefined' && episodeSerie.includes(item)) {
                        typeTexte = "épisode 1";
                    } else if (typeof episodeAnime !== 'undefined' && episodeAnime.includes(item)) {
                        typeTexte = "épisode 1";
                    }

                    return `
                        <div class="result-item" onclick="window.showFromSearchDirect('${safeNom}')">
                            <img src="${optimiserImageCloudinary(item.img, 'moyenne')}" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2270%22 style=%22background:%23333%22><text x=%2250%%22 y=%2250%%22 font-size=%2220%22 fill=%22%23666%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22>?</text></svg>'">
                            <div class="result-text-block">
                                <div class="result-item-name">${item.nom}</div>
                                <div class="result-item-type">${typeTexte}</div>
                            </div>
                        </div>
                    `;
                }).join('');
                
                resultsDiv.style.display = 'flex'; // Aligné sur ton CSS sans absolute
            } else {
                resultsDiv.innerHTML = '<div class="no-result" style="padding: 20px; color: #777; text-align: center;">Aucun résultat</div>';
                resultsDiv.style.display = 'flex';
            }
        }, 200);
    });
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        if (resultsDiv) resultsDiv.style.display = 'none';
    }
});

window.showFromSearchDirect = (nomDuJeu) => {
    const listesMisesAJour = fusionnerToutesLesListes();
    
    // CORRECTION 1 : Nettoyage mutuel pour éviter les échecs de comparaison à cause des apostrophes échappées
    const item = listesMisesAJour.find(j => j && j.nom && j.nom.trim() === nomDuJeu.replace(/\\'/g, "'").trim());

    if (item) {
        const modal = document.getElementById("modal-recherche");
        const modalMedia = document.getElementById("modal-media-recherche");
        const modalTitre = document.getElementById("modal-titre-recherche");
        
        if (modal && modalMedia && modalTitre) {
            modalTitre.innerText = ""; 
            
            const imgBasse = optimiserImageCloudinary(item.img, 'basse');
            const imgHaute = optimiserImageCloudinary(item.img, 'haute');

            // CORRECTION 2 : Gestion stricte du lien (évite le href="" si la chaîne est vide)
            const lienCliquable = (item.twitch && item.twitch.trim() !== "") ? item.twitch : "#";
            // Empêche le comportement par défaut si c'est juste un hashtag
            const attributTarget = lienCliquable !== "#" ? 'target="_blank"' : 'onclick="event.preventDefault()"';

            modalMedia.innerHTML = `
                <div class="container-recherche-jeu">
                    <a href="${lienCliquable}" ${attributTarget}>
                        <img src="${imgBasse}" id="img-modal-recherche-sous-preview" class="img-resultat-recherche">
                    </a>
                    <div class="titre-jeu-recherche">${item.nom}</div>
                </div>
            `;
            
            const imgHauteLoader = new Image();
            imgHauteLoader.src = imgHaute;
            imgHauteLoader.onload = () => {
                const imgAffiche = document.getElementById('img-modal-recherche-sous-preview');
                if (imgAffiche) imgAffiche.src = imgHaute;
            };

            modal.style.display = "flex";
        }

        if (resultsDiv) resultsDiv.style.display = 'none';
        if (inputRecherche) inputRecherche.value = '';
    }
};


function decodeEffect(elementId, targetText, speed = 1) {
    return new Promise((resolve) => {
        const element = document.getElementById(elementId);
        if (!element) return resolve();

        let iteration = 0;
        const japaneseChars = "フェミマースアーカイブ"; 
        const link = element.querySelector('a');
        const displayTarget = link ? link : element;
        element.style.visibility = 'visible';
        element.classList.add('decoding');

        const interval = setInterval(() => {
            displayTarget.innerText = targetText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return targetText[index]; 
                    }
                    return japaneseChars[Math.floor(Math.random() * japaneseChars.length)];
                })
                .join("");

            if(iteration >= targetText.length) {
                clearInterval(interval);
                resolve();
            }

            iteration += speed / 3; 
        }, 50);
    });
}


window.addEventListener('load', async () => {
    await decodeEffect('text-wiki', 'LE WIKI', 1); 

    await decodeEffect('text-femi', 'femimarss', 1); 
    const header = document.getElementById('header-anim');
    if(header) header.classList.add('reveal');
});


document.addEventListener("DOMContentLoaded", () => {
   
    const compteurs = document.querySelectorAll('[data-target]');
    
    compteurs.forEach(compteur => {
        const cible = +compteur.getAttribute('data-target');
        const dureeTotale = 2000; 
        const frameRate = 16; 
        const totalFrames = dureeTotale / frameRate;
        
        const increment = cible / totalFrames; 
        
        let valeurActuelle = 0;

        const actualiser = () => {
            valeurActuelle += increment;
            
            if (valeurActuelle < cible) {
                compteur.innerText = Math.ceil(valeurActuelle);
                setTimeout(actualiser, frameRate);
            } else {
                
                compteur.innerText = cible;
            }
        };

        actualiser();
    });
});
document.addEventListener("DOMContentLoaded", () => {
    
    const images = document.querySelectorAll('img');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
               
                img.src = img.src; 
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    }, {
        
        rootMargin: "0px 0px 300px 0px"
    });

    images.forEach(img => imageObserver.observe(img));
});




function genererGrilleVideo(liste, idConteneur) {
    const grille = document.getElementById(idConteneur);
    if (!grille) return;

    const isRecap = idConteneur === 'grid-recaps' || idConteneur === 'grid-archive';

    grille.innerHTML = liste.map(video => `
        <a href="${video.url}" target="_blank" class="video-card">
            <div class="thumbnail-container">
                <img src="${video.img}" alt="${video.titre}">
                <div class="video-overlay">
                    <div class="play-button">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
                ${!isRecap ? `<div class="video-number">#${video.id}</div>` : ''}
            </div>
            <div class="video-info">
                <h3>${!isRecap ? `#${video.id} — ` : ''}${video.titre}</h3>
                
                ${!isRecap ? `<p>feat. ${video.invites}</p>` : ''}
            </div>
        </a>
    `).join('');
}





    


window.addEventListener('DOMContentLoaded', () => {
    
    genererGrilleVideo(listeRecaps, 'grid-recaps');
    
    
    genererGrilleVideo(listeArrache, 'grid-arrache');

    genererGrilleVideo(listeArchive, 'grid-archive');
});


document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll('.category-header, .category-anime, .game-grid, .video-grid');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05 
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    targets.forEach(target => appearanceObserver.observe(target));
});
