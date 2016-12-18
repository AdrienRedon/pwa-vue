if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('cache-sw.js').then(
            function (registration) {
                // Registration Success
                registration.pushManager.getSubscription().then(
                    function(sub) {
                        console.log('sub to push');
                    }
                );
                console.log('[serviceWorker]: registration successful with scope: ', registration.scope);
            }
        ).catch(
            function (err) {
                // Registration failed :(
                console.log('[serviceWorker] registration failed', err);
            }
        );

        navigator.serviceWorker.ready.then(function(registration) {
            registration.pushManager.subscribe({userVisibleOnly: true}).then(function(sub) {
                console.log('[serviceWorker] Update server with subscription object', sub);
                updateServerWithSubscription(sub);
            }).catch(function(error) {
                console.log('[serviceWorker] Unable to subscribe user', error);
            });
        });

    }