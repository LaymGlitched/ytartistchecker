document.getElementById('checkButton').addEventListener('click', function () {
    var channelId = document.getElementById('channelId').value;
    var apiUrl = `https://yt.lemnoslife.com/channels?part=approval&id=${channelId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var resultDiv = document.getElementById('result');
            if (data.items && data.items.length > 0) {
                var channel = data.items[0];
                var approvalStatus = channel.approval;
                var channelTitle = channel.id;  // Using channel ID since title isn't available in this response

                if (approvalStatus === 'Official Artist Channel') {
                    resultDiv.innerHTML = `<strong>${channelTitle}</strong> is an Official Artist Channel!`;
                } else {
                    resultDiv.innerHTML = `<strong>${channelTitle}</strong> is not an Official Artist Channel.`;
                }
            } else {
                resultDiv.innerHTML = `Channel not found. Please check the ID and try again.`;
            }
        })
        .catch(error => {
            console.error('Error fetching channel data:', error);
            document.getElementById('result').innerHTML = `An error occurred. Please try again later.`;
        });
});

document.getElementById('toggleDarkMode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
