import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper'}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Plano$Plano" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Plano&Plano"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Back-end
              </Typography>
              {" — O projeto consiste em uma API que faz a interação entre o chatbot da Telek e o Salesforce."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tetris" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Team Tetris"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Full
              </Typography>
              {" — O projeto te possibilita visualizar as alocações de cada membro do time, e alocar novos membros para o time."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Loja Elera" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Loja Elera"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Full
              </Typography>
              {' — Desenvolvimento de uma loja virtual para a Elera, onde os clientes podem comprar os produtos da empresa.'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
