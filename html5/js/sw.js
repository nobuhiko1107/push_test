self.addEventListener("push", function(event) {
  event.waitUntil(
    self.registration.showNotification("Push通知タイトル", {
      body: "Push通知本文"
    })
  )
})