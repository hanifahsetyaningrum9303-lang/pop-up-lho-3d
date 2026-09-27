const button = document.getElementById("startButton");

button.addEventListener("click", async function () {

    // Mengecek apakah HP mendukung WebXR
    if (!navigator.xr) {
        alert(
            "Maaf, browser/perangkat ini belum mendukung AR WebXR."
        );
        return;
    }

    try {

        // Meminta izin untuk menggunakan AR
        const session = await navigator.xr.requestSession(
            "immersive-ar",
            {
                requiredFeatures: ["hit-test"]
            }
        );

        alert(
            "AR berhasil dimulai! Kamera siap digunakan."
        );

        // Menutup sesi AR ketika selesai
        session.addEventListener(
            "end",
            function () {
                console.log("Sesi AR selesai.");
            }
        );

    } catch (error) {

        console.error(error);

        alert(
            "AR belum dapat dimulai. Pastikan menggunakan HP dan browser yang mendukung AR."
        );

    }

});
