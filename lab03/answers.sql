-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
select id, first_name, last_name 
from users 
order by last_name ;


-- Exercise 4
select id, image_url, user_id 
from posts 
where user_id=26;


-- Exercise 5
select id, image_url, user_id 
from posts 
where user_id=26 or user_id=12;


-- Exercise 6
select count(*) 
from posts;


-- Exercise 7
select user_id, count(*) 
from comments 
group by user_id 
order by count(*) desc;


-- Exercise 8
select posts.id, posts.image_url, user_id, username, first_name, last_name 
from posts join users on users.id=posts.user_id 
where user_id=26 or user_id=12;


-- Exercise 9
select posts.id, pub_date, following_id 
from posts join following on posts.user_id=following.following_id 
where following.user_id=26;


-- Exercise 10
select posts.id, pub_date, following_id, username
from posts join following on posts.user_id=following.following_id 
			join users on posts.user_id=users.id 
where following.user_id=26 order by pub_date desc;


-- Exercise 11
Insert into bookmarks(user_id, post_id)
values(26,219);

Insert into bookmarks(user_id, post_id)
values (26,220);

Insert into bookmarks(user_id, post_id)
values (26,221);


-- Exercise 12
Delete from bookmarks
where user_id=26 and post_id=219;

Delete from bookmarks
where user_id=26 and post_id=221;

Delete from bookmarks
where user_id=26 and post_id=220;


-- Exercise 13
Update users 
set email='cyoung2022@gmail.com' 
where id=26;


-- Exercise 14
select posts.id, posts.user_id, count(*), posts.caption 
from comments join posts on posts.id=comments.post_id 
where posts.user_id=26 
group by posts.id 
order by count(*) desc;



