self.addEventListener("push", function(event) {
  event.waitUntil(
    self.registration.showNotification("Push�ʒm�^�C�g��", {
      body: "Push�ʒm�{��"
    })
  )
})