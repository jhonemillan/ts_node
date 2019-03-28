import * as Router from 'koa-router';
const passport = require('koa-passport');
    
    const router = new Router({prefix: '/auth'});
    
    router.get('/google', async(ctx)=>{
        console.log('entra');
        return passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    });

    router.get('/google/callback', async(ctx)=>{
        return passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            ctx.redirect('/')
        }
    })

    router.get('/status', async (ctx) => {
        if (ctx.isAuthenticated()) {
         ctx.status = 200;
         ctx.body = 'Is authenticated'
        } else {
          ctx.redirect('/');
        }
      })

      router.get('/logout', async (ctx) => {
        if (ctx.isAuthenticated()) {
          ctx.logout();
          ctx.redirect('/auth/login');
        } else {
          ctx.body = { success: false };
          ctx.throw(401);
        }
      });

export { router as authrout}