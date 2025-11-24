function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(new Error("Profile failed"));
      else resolve("Profile Loaded");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(new Error("Posts failed"));
      else resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(new Error("Messages failed"));
      else resolve("Messages Loaded");
    }, 1000);
  });
}

async function loadAllModules() {
  const startTime = Date.now();
  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);
  const totalTimeMs = Date.now() - startTime;

  results.forEach((result, index) => {
    const moduleName = ["Profile", "Posts", "Messages"][index];
    if (result.status === "fulfilled") {
      console.log(`${moduleName}: Success ->`, result.value);
    } else {
      console.log(`${moduleName}: Failed ->`, result.reason.message);
    }
  });

  console.log(`Total time taken: ${totalTimeMs} ms`);
}

loadAllModules();
