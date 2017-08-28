self.addEventListener("push", function(event){
  event.waitUntil().then(function(res){
    self.registration.showNotification("プッシュタイトル", {
      body: "プッシュ通知",
      icon: "./icon.png",
      tag: "tag"
    });
  });
});
self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  clients.openWindow("/");
}, false);