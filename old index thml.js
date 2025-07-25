<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yune's Profile</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            background-image: url('https://s3.tebi.io/ely.bucket.s0.io.biti/3d8d1cb1e37058f924128b20dfb0feee.gif');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;o
        }
        
        .profile-box {
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }

        
        @media (max-width: 640px) {
            .profile-box {
                width: 90%;
            }
        }
    </style>
</head>
<body>
    <div class="container mx-auto px-4 flex justify-center">
        <div class="profile-box bg-white bg-opacity-80 rounded-xl shadow-2xl p-8 w-96 max-w-full transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 mx-auto">
            <div class="flex items-start space-x-4 mb-6">
                <div class="relative">
                    <div class="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300 to-cyan-400 overflow-hidden shadow-md">
                        <img src="https://s3.tebi.io/ely.bucket.s0.io.biti/54ef5a24da91b7d4079d7b8ea5237844.jpg" alt="Yune's Avatar" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="flex-1">
                    <h1 class="text-2xl font-bold text-black">Yune</h1>
                    <p class="text-sm text-black mt-1">Sui no kaze</p>
                    <div class="flex space-x-2 mt-2">
                        <span class="text-xs bg-blue-300 text-blue-800 px-2 py-1 rounded-full">Creative</span>
                        <span class="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full">Artist</span>
                    </div>
                </div>
            </div>
            
            <div class="mt-8 flex space-x-4">
                <a href="https://pin.it/7tbwbFBI7" class="flex-1 bg-gradient-to-r from-red-500 to-[#F0FFF0] text-white py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <i class="fab fa-pinterest mr-2"></i> Pinterest
                </a>
                <a href="https://discord.gg/tms474bz" class="flex-1 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                    <i class="fab fa-discord mr-2"></i> Discord
                </a>
            </div>
            
            <div class="mt-6 pt-4 border-t border-gray-200">
                <div class="flex justify-between text-sm text-black">
                    <div class="text-center">
                        <div class="font-bold text-black">2.1K</div>
                        <div>Followers</div>
                    </div>
                    <div class="text-center">
                        <div class="font-bold text-black">1.5K</div>
                        <div>Following</div>
                    </div>
                    <div class="text-center">
                        <div class="font-bold text-black">1.8K</div>
                        <div>Works</div>
                    </div>
                </div>
                <div class="mt-4 text-center text-xs text-gray-600 opacity-50">
                    Your IP: <span id="ip-address">Loading...</span>
                </div>
            </div>
        </div>
    </div>
    <script>
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                document.getElementById('ip-address').textContent = data.ip;
            })
            .catch(() => {
                document.getElementById('ip-address').textContent = 'Unknown';
            });
    </script>
</body>
</html>
